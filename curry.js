'use strict'

const curry = f => (...args) => {
  const passed = args
  const feed = (...args) => {
    passed.push(...args)
    if (passed.length < f.length) {
      return feed
    } else {
      return f(...passed)
    }
  }
  if (passed.length < f.length) {
    return feed
  } else {
    return f(...passed)
  }
}

module.exports = curry
