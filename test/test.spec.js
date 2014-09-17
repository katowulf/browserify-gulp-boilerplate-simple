var fbutil = require('../src/base');

describe('tests', function() {
  it('should have a foo value', function() {
    expect(fbutil.foo).toBe('bar');
  });

  it('should have a baz value', function() {
    expect(fbutil.baz).toBe('bar!');
  });

  it('should have Firebase', function() {
    var fb = new Firebase('https://kato.firebaseio-demo.com');
    expect(fbutil.Firebase).toBeDefined();
  });
});
