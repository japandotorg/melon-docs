import { FileBox } from 'file-box';

export async function prNumberToTitleByApi (
    org: string,
    repo: string,
    pr: number,
): Promise<string> {
    const fileBox = FileBox.fromUrl(
        `https://api.github.com/repos/${org}/${repo}/pulls/${pr}`,
        'pr.json',
        {
            'User-Agent': 'FileBox', // @ts-ignore
        },
    );
    
    const prJsonText = (await fileBox.toBuffer()).toString();

    const prJson = JSON.parse(prJsonText);
    
    const prTitle = prJson.title as string;
    
    return prTitle;
}


export async function prNumberToTitle (
    org: string,
    repo: string,
    pr: number,
): Promise<string> {
    const fileBox = FileBox.fromUrl(
        `https://github.com/${org}/${repo}/pull/${pr}`,
        'pr.json',
    );

    const prHtml = (await fileBox.toBuffer()).toString();

    const matches = prHtml.match(/<html.+?<head>.+?<title>(.+?) by .+? · Pull Request #\d+.+?<\/title>/si);

    if (!matches) {
        throw new Error('No matches for pr title');
    }
    
    const prTitle = matches[1]!;
    return prTitle;
}
