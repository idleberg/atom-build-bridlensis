'use babel';

import { EventEmitter } from 'events';
import { install } from 'atom-package-deps';
import { spawnSync } from 'child_process';
import fs from 'fs';

// Package settings
import meta from '../package.json';

this.config = {
  pathToJar: {
    title: "Path to JAR",
    description: "Specify the full path to `BridleNSIS.jar`",
    type: "string",
    default: "",
    order: 0
  },
  customArguments: {
    title: "Custom Arguments",
    description: "Specify your preferred arguments for BridleNSIS, supports [replacement](https://github.com/noseglid/atom-build#replacement) placeholders",
    type: "string",
    default: "",
    order: 1
  }
};

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name);
  }
}

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
      // First, check for Java
      try {
        spawnSync('java -version');
      } catch (error) {
        if (atom.inDevMode()) atom.notifications.addError(meta.name, { detail: error, dismissable: true });
        return false;
      }

      // Second, check for nsL.jar
      let pathToJar = atom.config.get('build-bridlensis.pathToJar');

      try {
        fs.accessSync(pathToJar, fs.F_OK);
      } catch (error) {
        // Warn only
        if (atom.inDevMode()) atom.notifications.addWarning(meta.name, { detail: error, dismissable: true });
      }
      return true;
    }

    settings() {
      let pathToJar = atom.config.get('build-bridlensis.pathToJar');
      let defaultArguments = ['-jar', pathToJar]
      let customArguments = atom.config.get('build-bridlensis.customArguments').trim().split(" ");

      let args = defaultArguments.concat(customArguments);
      args.push("{FILE_ACTIVE}");

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
