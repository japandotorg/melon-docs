const mysqldump = require("mysqldump");

// @ts-check

const exec = require("child_process").exec;

const fs = require("fs");
const path = require("path");
const JSONS = require("jsons");

const content = fs.readFileSync(path.join(__dirname,  "../config/config.json"), {
    encoding: "utf-8"
});

const config = JSONS.parse(content);

let opts = {};

async function main() {
    if (config.database.type == "mysql" || config.database.type == "mariadb") {
        opts = {
            host: process.env.BACKUP_HOST || config.database.host,
            database: process.env.BACKUP_NAME|| config.database.name,
            user: process.env.BACKUP_USER ||config.database.user,
            password: process.env.BACKUP_PASS || config.database.pass,
        };

        const filename = "sqlbackups/" + new Date(Date.now()).getTime() + ".sql";

        await mysqldump({
            connection: opts,
            dumpToFile: filename,
            compressFile: false,
        });

        exec(`cat ${filename} | curl -F 'melon-docs=<-' https://guide.melonbot.io/`, function (
            error, stdout, stderr
        ) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error != null) {
                console.error('error: ' + error);
            };
        });
    };
};

try {
    const result = await main();
    console.log(result);
} catch (error) {
    console.error(error);
};
