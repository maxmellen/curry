'use strict'

const curryN = (n, f) => (...args) => {
  if (args.length < n) {
    return curryN(n - args.length, (...moreArgs) => f(...args, ...moreArgs))
  } else {
    return f(...args)
  }
}

const curry = f => curryN(f.length, f)

module.exports = curry
