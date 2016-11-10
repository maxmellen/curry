'use strict'

const t = require('tap')

const C = require('./curry')

const add = C((a, b, c) => a + b + c)

t.equal(add(1)(2)(3), 6)
t.equal(add(1, 2)(3), 6)
t.equal(add(1)(2, 3), 6)
t.equal(add(1, 2, 3), 6)
