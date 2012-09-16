class NoRandom
  constructor: (@seed=0) ->
  get: -> @seed

module.exports = NoRandom
