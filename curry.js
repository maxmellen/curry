'use strict'

const curryN = (n, f) => (...passed) =>
  passed.length < n
    ? curryN(n - passed.length, (...remaining) => f(...passed, ...remaining))
    : f(...passed)

const curry = f => curryN(f.length, f)

module.exports = curry
