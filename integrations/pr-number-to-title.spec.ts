#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import { test } from 'tstest';

import { prNumberToTitle } from './pr-number-to-title';

test.skip('pr number to title', async thing => {
    const ORG: string = 'JustryDeng';
    const REPO: string = 'PublicRepository';
    const PR: number = 2;
    const EXPECTED_TITLE = 'Create demo'

    const title = await prNumberToTitle(ORG, REPO, PR)
    thing.equal(title, EXPECTED_TITLE, 'Should get the right pr title.')
});
