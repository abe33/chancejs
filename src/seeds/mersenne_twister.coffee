{Cloneable, Sourcable, Formattable, include} = require 'mixinsjs'

class MersenneTwister
  include([
    Cloneable('seed')
    Sourcable('chancejs.MersenneTwister','seed')
    Formattable('MersenneTwister','seed')
  ]).in MersenneTwister

  constructor: (seed=0) ->
    @mt = Array 623
    @z = 0
    @y = 0

    @plantSeed seed

  plantSeed: (seed=0) ->
    @mt[0] = seed
    @mt[i] = ((0x10dcd * @mt[i-1]) + 1) & 0xFFFFFFFF for i in [1..623]

  get: ->
    @generateNumbers() if @z >= 623
    @extractNumber(@z++) / 0x80000000

  generateNumbers: ->
    @z = 0
    for i in [0..623]
      @y = 0x80000000 & @mt[i] + 0x7FFFFFFF & (@mt[(i + 1) % 623])

      if @y % 2 is 0
        @mt[i] = @mt[(i + 397) % 623] ^ (@y >> 1)
      else
        @mt[i] = @mt[(i + 397) % 623] ^ (@y >> 1) ^ 0x9908B0DF

  extractNumber: (i) ->
    @y = @mt[i]
    @y ^= (@y >> 11)
    @y ^= (@y << 7) & 0x9d2c5680
    @y ^= (@y << 15) & 0xefc60000
    @y ^= (@y >> 18)

module.exports = MersenneTwister
