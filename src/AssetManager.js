function AssetManager() {
  this.successCount = 0;
  this.failCount = 0;
  this.cache = {};
  this.queue = [];
};
AssetManager.prototype.add = function(id, path) {
  this.queue.push({id: id, path: path});
};
AssetManager.prototype.downloadAll = function(callback) {
  for (var i = 0, l = this.queue.length; i < l; i++) {
    var img = new Image();
    var that = this;
    img.addEventListener('load', function() {
      that.successCount++;
      that.cache[this.assetId] = this;
      if (that.isDone()) {
        callback.call();
      }
    }, false);
    img.addEventListener('error', function() {
      that.failCount++;
    }, false);
    img.assetId = this.queue[i].id;
    img.src = this.queue[i].path;
  }
};
AssetManager.prototype.isDone = function() {
  return this.queue.length == this.successCount + this.failCount;
};
AssetManager.prototype.getAsset = function(id) {
  return this.cache[id];
};
