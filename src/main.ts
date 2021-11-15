import * as core from '@actions/core';
import { makeConfig } from './config';
import { matcher } from './matcher';

async function run(): Promise<void> {
  try {
    const config = await makeConfig();
    const result = matcher(config.key, config.map);
    if (typeof result === 'object') {
      for (const [key, value] of Object.entries(
        result as Record<string, unknown>,
      )) {
        core.setOutput(key, value);
      }
    } else {
      core.setOutput('result', result);
    }
  } catch (error) {
    core.setFailed(error instanceof Error ? error.message : 'Unknown error');
  }
}

run();
