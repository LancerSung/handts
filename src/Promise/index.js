/*
 * @Description:
 * @Version: 1.0
 * @Autor: songyzh
 * @Date: 2021-11-21 19:43:29
 * @LastEditors: songyzh
 * @LastEditTime: 2021-11-21 20:13:08
 */
const RESOLVE = 'resolve'
const PENDING = 'pending'
const REJECT = 'reject'
class CustomPromise {
  constructor(exuctor) {
    this.value = void 0
    this.reason = void 0
    this.status = PENDING

    this.resolveCallbacks = []
    this.rejectCallbacks = []
    exuctor(this._resolve.bind(this), this._reject.bind(this))
  }

  _resolve(value) {
    if (this.status === PENDING) {
      this.status = RESOLVE
      this.value = value
      this.resolveCallbacks.forEach((fn) => fn())
    }
  }
  _reject(reason) {
    if (this.status === PENDING) {
      this.status = REJECT
      this.reason = reason
      this.rejectCallbacks.forEach((fn) => fn())
    }
  }
  then(onResolve, onReject) {
    if (this.status === PENDING) {
      this.resolveCallbacks.push(() => {
        onResolve(this.value)
      })
      this.rejectCallbacks.push(() => {
        onReject(this.reason)
      })
    } else if (this.status === RESOLVE) {
      onResolve(this.value)
    } else if (this.status === REJECT) {
      onReject(this.reason)
    }
  }
}
