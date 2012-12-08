{Cloneable, Sourcable, Formattable, include} = require 'mixinsjs'
class NoRandom
  include([
    Cloneable('seed')
    Sourcable('chancejs.NoRandom','seed')
    Formattable('NoRandom','seed')
  ]).in NoRandom

  constructor: (@seed=0) ->
  get: -> @seed

module.exports = NoRandom
