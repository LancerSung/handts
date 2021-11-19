/*
 * @Description:
 * @Version: 1.0
 * @Autor: songyzh
 * @Date: 2021-11-19 23:41:15
 * @LastEditors: songyzh
 * @LastEditTime: 2021-11-19 23:58:48
 */
const customCreate = require('../src/Object.create/index')
Object.prototype.customCreate = customCreate
describe('自定义Object.create实现测试', () => {
  it('传入一个参数', () => {
    const person = {
      name: 'sung',
      say: function () {
        console.log(`I'm ${this.name}`)
      }
    }
    const me = Object.customCreate(person)
    expect(me.say()).toBe(person.say())
  })

  it('null 作为原型', () => {
    const me = Object.customCreate(null)
    expect(me).toEqual(Object.create(null))
  })

  it('传参有误', () => {
    expect(() => Object.customCreate(1)).toThrow(TypeError)
  })
})
