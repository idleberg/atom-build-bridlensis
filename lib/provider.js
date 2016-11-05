'use babel';

import { install } from 'atom-package-deps';
import fs from 'fs';
import path from 'path';

// Package settings
import meta from '../package.json';
const pathToScript = atom.config.get(`${meta.name}.pathToScript`);
const bridleScript = pathToScript ? '"' + pathToScript + '"' : path.join(__dirname, 'bridlensis.cmd');
const bridleJar = atom.config.get(`${meta.name}.pathToJar`);

// This package depends on build, make sure it's installed
export function activate() {
  if (!atom.inSpecMode()) {
    install(meta.name);
  }
}

export function provideBuilder() {
  return class BridlensisProvider {
    constructor(cwd) {
      this.cwd = cwd;

      // Settings?
      if (!atom.config.get('build-bridlensis.pathToJar')) {
        atom.config.set('build-bridlensis.pathToJar', '');
      }
    }

    getNiceName() {
      return 'BridleNSIS';
    }

    isEligible() {
      try {
        fs.accessSync(bridleJar, fs.F_OK);
      } catch (error) {
        // Warn only
        if (atom.inDevMode()) atom.notifications.addError(meta.name, { detail: error, dismissable: true });
      }
      return true;
    }

    settings() {
      const cwdPath = '{FILE_ACTIVE_PATH}';

      return [
        {
          name: 'BridleNSIS (Windows)',
          exec: bridleScript,
          args: [ '{FILE_ACTIVE}' ],
          cwd: cwdPath,
          sh: true,
          keymap: 'cmd-alt-b',
          atomCommandName: 'bridlensis:compile-on-windows'
        },
        {
          name: 'BridleNSIS',
          exec: 'java',
          args: [ '-jar', bridleJar, '{FILE_ACTIVE}' ],
          cwd: cwdPath,
          sh: false,
          keymap: 'ctrl-alt-cmd-b',
          atomCommandName: 'bridlensis:compile'
        }
      ];
    }
  };
}
