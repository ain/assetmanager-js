AssetManager JS [![Build Status](https://travis-ci.org/ain/assetmanager-js.png?branch=master)](https://travis-ci.org/ain/assetmanager-js)
===============

AssetManager JS is a robust and lightweight JavaScript asset manager for images.
For example it can be used to quickly preload a set of images for your HTML5 project.

## Requirements
None.

## Installation
1. Download a 1KB _dist/Assetmanager.min.js_
2. Include it in your website or application

## Usage
Initialize:
```
var assetManager = new AssetManager();
```
Queue assets:
```
assetManager.add('firstAssetId', 'path/to/asset1.file');
assetManager.add('secondAssetId', 'path/to/asset2.file');
```
Download all assets:
```
// callbackFunction will be called once all assets have been downloaded
assetManager.downloadAll(callbackFunction);
```
Retrieve asset:
```
var firstAssetObject = assetManager.get('firstAssetId');
```