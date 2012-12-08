# Original Implementation License:
#
# The Central Randomizer 1.3 (C) 1997 by Paul Houle (paul@honeylocust.com)
# See:  http://www.honeylocust.com/javascript/randomizer.html

{Cloneable, Sourcable, Formattable, include} = require 'mixinsjs'

class PaulHoule
  include([
    Cloneable('seed')
    Sourcable('chancejs.PaulHoule','seed')
    Formattable('PaulHoule','seed')
  ]).in PaulHoule

  constructor: (@seed) ->
  get: ->
    @seed = (@seed * 9301 + 49297) % 233280
    @seed / 233280.0

module.exports = PaulHoule
