/*! AssetManager - v0.2.2 - 2014-07-06
* http://github.com/ain/assetmanager-js
* Copyright © 2014 Ain Tohvri; Licensed GPL */var AssetManager = (function() {

  'use strict';

  function AssetManager() {
    this.successCount = 0;
    this.failCount = 0;
    this.cache = {};
    this.queue = [];
  }
  AssetManager.prototype.add = function(id, path) {
    return this.queue.push({id: id, path: path});
  };
  AssetManager.prototype.downloadAll = function(callback) {
    for (var i = 0, l = this.queue.length, img; i < l; i++) {
      img = new Image();
      img.assetId = this.queue[i].id;
      img.callbacks = {'load': callback};
      img.manager = this;
      img.addEventListener('load', this.handleImageLoadSuccess);
      img.addEventListener('error', this.handleImageLoadError);
      img.src = this.queue[i].path;
    }
  };
  AssetManager.prototype.handleImageLoadSuccess = function() {
    this.manager.successCount++;
    this.manager.cache[this.assetId] = this;
    if (this.manager.isDone()) {
      this.callbacks.load.call();
    }
  };
  AssetManager.prototype.handleImageLoadError = function() {
    this.manager.failCount++;
  };
  AssetManager.prototype.isDone = function() {
    return this.queue.length === this.successCount + this.failCount;
  };
  AssetManager.prototype.get = function(id) {
    return this.cache[id];
  };

  return AssetManager;
})();