import * as core from '@actions/core';
import { makeConfig } from './config';
import { matcher } from './matcher';

async function run(): Promise<void> {
  try {
    const config = await makeConfig();
    const result = matcher(config.key, config.map);
    core.setOutput('result', result);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('Unknown error');
    }
  }
}

run();
