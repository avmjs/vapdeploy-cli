## vapdeploy-cli

A CLI for the [vapdeploy](http://github.com/silentcicero/vapdeploy) Vapory smart-contract deployment staging facility.

## Installation

```
npm install -g vapdeploy-cli
```

## Run

```
vapdeploy ./vapdeploy.config.js ./environments.json
```

## Example
First install and run [vaporyjs-testrpc](http://github.com/vaporycojs/vaporyjs-testrpc), then run the example `vapdeploy` cli.

```
npm install -g vaporyjs-testrpc
testrpc
npm run example
```

## Example CLI Output

```
> vapdeploy ./example/vapdeploy.config.js ./example/

vapdeploy [2016-07-29T04:06:44.117Z]:  Environment 'morden' configured, starting contract deployment...
vapdeploy [2016-07-29T04:06:44.146Z]:  Deploying 'SimpleStore' to environment 'morden'...
vapdeploy [2016-07-29T04:06:44.682Z]:  Deploying 'SimpleStoreService' to environment 'morden'...
vapdeploy [2016-07-29T04:06:44.682Z]:  Deploying 'SomeCustomInstance' to environment 'morden'...
vapdeploy [2016-07-29T04:06:48.734Z]:  All contracts deployed successfully to environment 'morden'!
vapdeploy-build [2016-07-29T04:06:48.737Z]:  build output file already exists... morphing and modifying with Object.assign...
vapdeploy-build [2016-07-29T04:06:48.741Z]:  File Generated: './example/environments.json' [modified] successfully!

    Details:
      Generation Time: 2016-07-29T04:06:48.741Z
      File Generated: ./example/environments.json [modified]
```

## CLI Inputs

```
vapdeploy <config-path> <output-dir-path> [options]
```

## Future/Todo
 - More build options (i.e. --override, --morph etc.)
 - Modularize out `build` util module

## Licence

Released under the MIT License, see [LICENSE.md](LICENSE.md) file.
