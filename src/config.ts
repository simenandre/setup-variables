import { getInput } from '@actions/core';
import * as rt from 'runtypes';
import * as yaml from 'yaml';

export const config = rt.Record({
  key: rt.String,
  map: rt.Dictionary(rt.Unknown),
  varName: rt.String,
});

export type Config = rt.Static<typeof config>;

export async function makeConfig(): Promise<Config> {
  const map = yaml.parse(getInput('map', { required: true }));
  return config.check({
    key: getInput('key', { required: true }),
    varName: getInput('var-name') || 'result',
    map,
  });
}
