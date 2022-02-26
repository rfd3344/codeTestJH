import assert from 'assert';

describe('test setup', function () {
  let testNum = 0;

  beforeEach(function () {
    testNum = 1;
  });

  afterEach(function () {
    testNum = 0;
  });

  it('should initialize test environment', function () {
    assert.equal(testNum, 1);
  });
});
