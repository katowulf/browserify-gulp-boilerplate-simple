
var fbutil = require('../src/base.js');
//var fbutil = require('../dist/bundle.js');

console.log(fbutil);

describe('huh?', function() {
  it('should have a foo value', function() {
    expect(fbutil.foo).toBe('bar');
  });

  it('should have a baz value', function() {
    expect(fbutil.baz).toBe('bar!');
  });
});