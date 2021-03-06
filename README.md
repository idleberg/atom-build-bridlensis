# build-bridlensis

[![apm](https://flat.badgen.net/apm/license/build-bridlensis)](https://atom.io/packages/build-bridlensis)
[![apm](https://flat.badgen.net/apm/v/build-bridlensis)](https://atom.io/packages/build-bridlensis)
[![apm](https://flat.badgen.net/apm/dl/build-bridlensis)](https://atom.io/packages/build-bridlensis)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-build-bridlensis)](https://circleci.com/gh/idleberg/atom-build-bridlensis)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-build-bridlensis)](https://david-dm.org/idleberg/atom-build-bridlensis?type=dev)

[Atom Build](https://atombuild.github.io/) for [BridleNSIS](https://github.com/henrikor2/bridlensis), transpiles BridleNSIS into NSIS

## Installation

### apm

Install `build-bridlensis` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-bridlensis`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `build-bridlensis`:

```bash
$ git clone https://github.com/idleberg/atom-build-bridlensis build-bridlensis
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

You should now be setup to build the package:

```bash
$ yarn build || npm run build
```

## Configuration

Make sure to specify the path to your `BridleNSIS.jar` in the package settings.

**Example**:

```cson
"build-bridlensis":
    pathToJar: "%PROGRAMFILES(X86)%\\BridleNSIS\\BridleNSIS-0.4.1.jar"
```

## Usage

Before you can build, select an active target with your preferred build option.

Available targets:

* `BridleNSIS` – transpile script

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Choose target**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Toggle build panel**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

**Build script**

<kbd>Super</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

## License

This work is dual-licensed under [The MIT License](https://opensource.org/licenses/MIT) and the [GNU General Public License, version 2.0](https://opensource.org/licenses/GPL-2.0)
