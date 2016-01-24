var assert = require('assert');
var resolver = require('../');

var dumbplugin = function(data) {
  var plugin = {};
  plugin.resolve = function(url, cb) {
    cb(data);
  };
  return plugin;
}

describe("test func", function() {
  it("your func should work", function(done) {
    var r = new resolver().register(dumbplugin({
      title: 'a',
      desc: 'b',
    }));
    r.resolve('', function(data) {
      assert.equal(data.title, 'a');
      assert.equal(data.desc, 'b');
      done();
    })
  });
});
