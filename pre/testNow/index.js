const path = require('path')
const fs = require('fs');
module.exports = class TestNow {


  genJestSource(sourcePath = path.resolve('./')){
    
  }


  getTestSource(methodName, classFile, isClass = false) {
    console.log('getTestSource:', methodName);
    return `
test('${'TEST' + methodName}', () => {
  const ${isClass ? '{' + methodName +'}' : methodName} =  require('${'../' + classFile}')
  const ret = ${methodName}()
  // expect(ret)
  //  .toBe('test ret')
})`
  }
  /**
   * 生成测试文件名
   * @param {*} filename 代码文件名
   */
  getTestFileName(filename) {

    const dirName = path.dirname(filename)
    const baseName = path.basename(filename)
    const extName = path.extname(filename)
    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root: dirName + '/__test__/',
      base: testName
    })
  }
}