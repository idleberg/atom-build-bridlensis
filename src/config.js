import { name } from '../package.json';

export const configSchema = {
  pathToJar: {
    title: 'Path to JAR',
    description: 'Specify the full path to `BridleNSIS.jar`',
    type: 'string',
    default: '',
    order: 0
  },
  mutePathWarning: {
    title: 'Mute Warning',
    description: 'When enabled, warnings about missing path to `BridleNSIS.jar` will be muted',
    type: 'boolean',
    default: false,
    order: 1
  },
  customArguments: {
    title: 'Custom Arguments',
    description: 'Specify your preferred [arguments](https://github.com/henrikor2/bridlensis/blob/master/src/main/resources/bridlensis/USAGE) for BridleNSIS',
    type: 'string',
    default: '',
    order: 2
  },
  manageDependencies: {
    title: 'Manage Dependencies',
    description: 'When enabled, third-party dependencies will be installed automatically',
    type: 'boolean',
    default: true,
    order: 2
  },
  alwaysEligible: {
    title: 'Always Eligible',
    description: 'The build provider will be available in your project, even when not eligible',
    type: 'boolean',
    default: false,
    order: 4
  }
};

export function getConfig(key) {
  return atom.config.get(`${name}.${key}`);
}
