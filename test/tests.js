var assetManager = new AssetManager();

test('add to queue', function() {
  ok(assetManager.add('gpl3_64', 'img/gpl3_64.png'), 'queued gpl3_64');
  ok(assetManager.add('gpl3_128', 'img/gpl3_128.png'), 'queued gpl3_128');
  ok(assetManager.add('gpl3_256', 'img/gpl3_256.png'), 'queued gpl3_256');
});

asyncTest("download all assets", 1, function() {
  assetManager.downloadAll(function() {
    ok(true, 'all assets downloaded');
    start();
  });
});

test('get asset', function() {
  ok(assetManager.getAsset('gpl3_64'), 'got asset gpl3_64')
  ok(assetManager.getAsset('gpl3_128'), 'got asset gpl3_128')
  ok(assetManager.getAsset('gpl3_256'), 'got asset gpl3_256')
});

test('asset type check', function() {
  ok(assetManager.getAsset('gpl3_64') instanceof Image, 'gpl3_64 is Image')
  ok(assetManager.getAsset('gpl3_128') instanceof Image, 'gpl3_128 is Image')
  ok(assetManager.getAsset('gpl3_256') instanceof Image, 'gpl3_256 is Image')
});
