async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
    if (
        process.env.NETLIFY === 'true' &&
        process.env.SITE_NAME === 'melon_docs'
    ) {
        console.log(
            '[ Crowdin ] Delaying the melon_docs deployment to avoid 409 errors',
        );
        await delay(30000);
    }
}

run().then(
    () => {
        process.exit(0);
    },
    (e) => {
        console.error(e.message)
        console.error(e.stack);
        process.exit(1);
    },
);