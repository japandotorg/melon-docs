#!/usr/bin/env -S node --no-warnings --loader ts-node/esm

import ciInfo from 'ci-info';
import { test } from 'tstest';

import '../integrations/config';
import { prNumberToTitle } from '../integrations/pr-number-to-title';

test.skip('pull request title', async thing => {
    if (ciInfo.isPR) {
        const prNum = parseInt(process.env['TRAVIS_PULL_REQUEST'] as string);
        const prTitle = await prNumberToTitle('JustryDeng', 'PublicRepository', prNum);

        if (prTitle.match(/(oral|poster)/i)) {
            thing.ok(prTitle.match(/^(🗣|📰)/), 'Oral or Poster only.');
        } else {
            await thing.skip('Not Oral or Poster PR, skipped.');
        }
    } else {
        await thing.skip('Skipped becasue this test is not ran from a known pull request.');
    }
})
