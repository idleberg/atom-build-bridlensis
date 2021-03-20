import { configSchema, getConfig } from './config';
import { EventEmitter } from 'events';
import { existsSync } from 'fs';
import { satisfyDependencies } from 'atom-satisfy-dependencies';
import { spawnSync } from 'child_process';
import { which } from './util';
import meta from '../package.json';

export { configSchema as config };

export function provideBuilder() {
  return class BridlensisProvider extends EventEmitter {
    constructor(cwd) {
      super();
      this.cwd = cwd;
      atom.config.observe('build-bridlensis.pathToJar', () => this.emit('refresh'));
      atom.config.observe('build-bridlensis.customArguments', () => this.emit('refresh'));
    }

    getNiceName() {
      return 'BridleNSIS';
    }

    isEligible() {
      if (getConfig('alwaysEligible') === true) {
        return true;
      }

      // First, check for Java
      const cmd = spawnSync(which(), ['java']);
      if (!cmd.stdout.toString()) {
        return false;
      }

      // Second, check for BridleNSIS.jar
      const pathToJar = getConfig('pathToJar');

      if (existsSync(pathToJar)) {
        return true;
      }

      // Warn only
      if (getConfig('mutePathWarning') === false) {
        const notification = atom.notifications.addWarning(`**${meta.name}**: No valid \`BridleNSIS.jar\` was specified in your settings`, {
          dismissable: true,
          buttons: [
            {
              text: 'Open Settings',
              className: 'icon icon-gear',
              onDidClick: function () {
                atom.workspace.open('atom://config/packages/' + meta.name, {pending: true, searchAllPanes: true});
                notification.dismiss();
              }
            },
            {
              text: 'Ignore',
              onDidClick: function () {
                atom.config.set(meta.name + '.mutePathWarning', true);
                notification.dismiss();
              }
            }
          ]
        });
      }

      return false;
    }

    settings() {
      const pathToJar = getConfig('pathToJar');
      const defaultArguments = ['-jar', pathToJar];
      const customArguments = getConfig('customArguments').trim().split(' ');

      const args = defaultArguments.concat(customArguments);
      args.push('{FILE_ACTIVE}');

      return [
        {
          name: 'BridleNSIS',
          exec: 'java',
          args: args,
          cwd: '{FILE_ACTIVE_PATH}',
          sh: false,
          keymap: 'ctrl-alt-cmd-b',
          atomCommandName: 'bridlensis:compile'
        }
      ];
    }
  };
}

// This package depends on build, make sure it's installed
export function activate() {
  if (getConfig('manageDependencies') === true) {
    satisfyDependencies(meta.name);
  }
}
