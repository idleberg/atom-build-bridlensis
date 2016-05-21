'use babel';

import fs from 'fs';
import path from 'path';

const pathToScript = atom.config.get('build-bridlensis.pathToScript');
const bridleScript = pathToScript ? '"' + pathToScript + '"' : path.join(__dirname, 'bridlensis.cmd');
const bridleJar = atom.config.get('build-bridlensis.pathToJar');

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
      } catch (e) {
        // Warn only
        console.log('[build-bridlensis] ' + e);
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
