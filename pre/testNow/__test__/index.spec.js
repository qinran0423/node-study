test('测试文件名生成', () => {
  const src = new (require('../index'))()

  const ret = src.getTestFileName('/abc/class.js')
  console.log('getTestFileName',ret);
  expect(ret)
    .toBe('/abc/__test__/class.spec.js')
})