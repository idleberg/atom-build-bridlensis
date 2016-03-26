[![apm](https://img.shields.io/apm/l/build-bridlensis.svg?style=flat-square)](https://atom.io/packages/build-bridlensis)
[![apm](https://img.shields.io/apm/v/build-bridlensis.svg?style=flat-square)](https://atom.io/packages/build-bridlensis)
[![apm](https://img.shields.io/apm/dm/build-bridlensis.svg?style=flat-square)](https://atom.io/packages/build-bridlensis)
[![Travis](https://img.shields.io/travis/idleberg/atom-build-bridlensis.svg?style=flat-square)](https://travis-ci.org/idleberg/atom-build-bridlensis)
[![David](https://img.shields.io/david/dev/idleberg/atom-build-bridlensis.svg?style=flat-square)](https://david-dm.org/idleberg/atom-build-bridlensis#info=dependencies)
[![Gitter](https://img.shields.io/badge/chat-Gitter-ff69b4.svg?style=flat-square)](https://gitter.im/NSIS-Dev/Atom)

# build-bridlensis

[Atom Build](https://atombuild.github.io/) for [BridleNSIS](https://github.com/henrikor2/bridlensis), translates BridleNSIS into NSIS

## Installation

### apm

* Install package `apm install build-bridlensis` (or use the GUI)

### GitHub

1. Change directory `cd ~/.atom/packages/`
2. Clone repository `git clone https://github.com/idleberg/atom-build-bridlensis build-bridlensis`

## Usage

Before you can build, select an active target with your preferred build option.

Available targets:

* `BridleNSIS (Windows)` – runs batch script, detecting installed `BridleNSIS.jar`, then compiling
* `BridleNSIS` – compiles using manually specified path to `BridleNSIS.jar`

#### Path to JAR

When you can't use the Windows batch file, you need to specify a custom path for `BridleNSIS.jar` in your `config.cson`:

```cson
 "build-bridlensis":
    pathToJar: "path/to/BridleNSIS.jar"
 ```

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Choose target**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Toggle build panel**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

**Build script**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

## License

This work is licensed under the [The MIT License](LICENSE.md).

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/atom-build-bridlensis) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`