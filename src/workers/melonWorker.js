/**
 * @format
 */

importScripts('melon.js');

var lastTime;
function ellapsed() {
    if (!lastTime) {
        lastTime = new Date();
        return 0 + ' ms';
    }
    var newTime = new Date();
    var res = newTime - lastTime;
    lastTime = newTime;
    return res + ' ms';
}

async function initMelon(handleOutput) {
    ellapsed();
    let melonModule = await createMelon({
        print: handleOutput,
        printErr: handleOutput,
    });
    console.log(ellapsed(), 'initializing runtime for melon');
    return melonModule;
}

async function runMelon(args, source) {
    ellapsed();

    let output = '';
    let handleOutput = txt => {
        output += `${txt}\n`;
    };

    const { callMain, FS } = await initMelon(handleOutput);

    const fileName = '/tmp/melon-input.js';
    FS.writeFile(fileName, source);

    callMain([...args, fileName]);

    console.log(ellapsed(), 'running melon');
    return output;
}

onmessage = async function(e) {
    const [tag, args, source] = e.data;
    switch (tag) {
        case 'run':
            const result = await runMelon(args, source);
            postMessage(['runResult', result]);
            break;
    }
};