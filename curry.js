'use strict'

const curry = f => (...args) => {
  const passed = []
  const feed = (...args) => {
    passed.push(...args)
    if (passed.length < f.length) {
      return feed
    } else {
      return f(...passed)
    }
  }
  return feed(...args)
}

module.exports = curry
