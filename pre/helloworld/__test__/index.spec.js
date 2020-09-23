test('测试 helloworld', () => {
  const ret = require('../index')
  expect(ret)
    .toBe('hello world')
})