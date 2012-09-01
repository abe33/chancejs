Neat = require 'neat'
Neat.require 'core'

global.withLoop = (times= 20, block) ->
  [times, block] = [20, times] if typeof times is 'function'
  block.call this, n for n in [0..times]
