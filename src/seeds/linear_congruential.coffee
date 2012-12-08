{Cloneable, Sourcable, Formattable, include} = require 'mixinsjs'

class LinearCongruential
  include([
    Cloneable('seed')
    Sourcable('chancejs.LinearCongruential','seed')
    Formattable('LinearCongruential','seed')
  ]).in LinearCongruential

  constructor: (@seed=1) ->
  plantSeed: (@seed=1) ->

  get: ->
    tmp = @seed
    q = tmp
    q = q << 1
    p = tmp << 32
    m = p + q
    if m & 0x80000000
      m = m & 0x7fffffff
      m++
    @seed = m
    m / 0x80000000

module.exports = LinearCongruential
