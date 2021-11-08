const { Translations } = require('@crowdin/crowdin-api-client');
const pollInterval = 5000;
const timeout = 5 * 60 * 1000;
const projectId = process.env.CROWDIN_PROJECT_ID;
const token = process.env.CROWDIN_PROJECT_TOKEN;

const transactions = new Translations({
    token,
});

async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function hasBuildInProgress() {
    const projectBuilds = await translations.listProjectBuilds(projectId);
    return projectBuilds.data.some((build) => build.data.status === 'inProgress');
}

async function run() {
    const timeBefore = Date.now();
    /* eslint-disable-next-line no-constant-condition */
    while (true) {
        if (Date.now() - timeBefore > timeout) {
            console.warn(
                '[ Crowdin ] Timeout of write script reached => will try to proceed but download translations is likely to fail',
            );
            break;
        }

        const inProgress = await hasBuildInProgress();
        if (inProgress) {
            console.log('[ Crowdin ] A build is still in progress => waiting...');
            await delay(pollInterval);
        } else {
            console.warn('[ Crowdin ] No build in progress => lets continue');
            break;
        }
    }
}

run().then(
    () => {
        process.exit(0);
    },
    (e) => {
        console.error(e.message);
        console.error(e.stack);
        process.exit(1);
    },
);