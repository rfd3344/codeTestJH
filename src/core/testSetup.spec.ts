import assert from 'assert';

describe('test setup', () => {
  let testNum = 0;

  beforeEach(() => {
    assert.equal(testNum, 0);
    testNum = 1;
  });

  afterEach(() => {
    testNum = 0;
  });

  it('should initialize test environment', () => {
    assert.equal(testNum, 1);
  });
});
