var base = require('../src/base');

describe('tests', function() {
  it('should have a foo value', function() {
    expect(base.foo).toBe('bar');
  });

  it('should have a baz value', function() {
    expect(base.baz).toBe('bar!');
  });

  it('should have Firebase', function() {
    expect(base.Firebase).toBeDefined();
  });
});
