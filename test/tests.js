var assetManager = new AssetManager();

test('add to queue', function() {
  ok(assetManager.add('gpl3_64', 'img/gpl3_64.png'), 'gpl3_64 queued');
  ok(assetManager.add('gpl3_128', 'img/gpl3_128.png'), 'gpl3_128 queued');
  ok(assetManager.add('gpl3_256', 'img/gpl3_256.png'), 'gpl3_256 queued');
});

test('download', function() {
  // TODO implement
  ok(true, 'implementation missing')
});

test('get asset', function() {
  // TODO implement
  ok(true, 'implementation missing')
});
