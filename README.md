# AssetManager JS  [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](http://img.shields.io/travis/ain/assetmanager-js.svg)](https://travis-ci.org/ain/assetmanager-js) [![Bower version](https://badge.fury.io/bo/assetmanager-js.svg)](http://badge.fury.io/bo/assetmanager-js) [![devDependency Status](https://david-dm.org/ain/assetmanager-js/dev-status.svg)](https://david-dm.org/ain/assetmanager-js#info=devDependencies)

AssetManager JS is a robust and lightweight JavaScript asset manager for images.
For example it can be used to quickly preload a set of images for your HTML5 project.

## Installation

### Bower
1. `bower install assetmanager-js`
2. Include AssetManager.min.js in your website or application from the bower installation folder

### Manual
1. Download a 1KB [Assetmanager.min.js](https://github.com/ain/assetmanager-js/raw/master/dist/AssetManager.min.js)
2. Include it in your website or application

## Usage
Initialize:
```javascript
var assetManager = new AssetManager();
```
Queue assets:
```javascript
assetManager.add('firstAssetId', 'path/to/asset1.file');
assetManager.add('secondAssetId', 'path/to/asset2.file');
```
Download all assets:
```javascript
// callbackFunction will be called once all assets have been downloaded
assetManager.downloadAll(callbackFunction);
```
Retrieve asset:
```javascript
var firstAssetObject = assetManager.get('firstAssetId');
```

## Example
See _example/index.html_.

## License
[![GPLv3](gplv3-127x51.png)](https://raw.githubusercontent.com/ain/assetmanager-js/master/LICENSE)
