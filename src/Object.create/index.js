/*
 * @Description:
 * @Version: 1.0
 * @Autor: songyzh
 * @Date: 2021-11-19 23:27:20
 * @LastEditors: songyzh
 * @LastEditTime: 2021-11-19 23:42:48
 */
function customCreate(proto, propertiesObject) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object')
  }

  function F() {}
  F.prototype = proto
  const o = new F()

  if (typeof propertiesObject !== 'undefined') {
    try {
      Object.defineProperties(o, propertiesObject)
    } catch (e) {
      throw e
    }
  }

  return o
}
module.exports = customCreate
