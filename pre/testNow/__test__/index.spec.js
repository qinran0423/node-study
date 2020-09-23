test('测试代码生成', () => {
  const src = new (require('../index'))()
  const ret = src.getTestSource('fun', 'class')
  // console.log(ret);
  expect(ret)
  .toBe(`
test('TESTfun', () => {
  const fun =  require('../class')
  const ret = fun()
  // expect(ret)
  //  .toBe('test ret')
})`)
})


// test('测试文件名生成', () => {
//   const src = new (require('../index'))()

//   const ret = src.getTestFileName('/abc/class.js')
//   console.log('getTestFileName',ret);
//   expect(ret)
//     .toBe('/abc/__test__/class.spec.js')
// })