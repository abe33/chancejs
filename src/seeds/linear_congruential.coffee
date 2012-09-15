
class LinearCongruential
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
