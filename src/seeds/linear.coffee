{Cloneable, Sourcable, Formattable, include} = require 'mixinsjs'

class Linear
  include([
    Cloneable('step')
    Sourcable('chancejs.Linear','step')
    Formattable('Linear','step')
  ]).in Linear

  constructor: (@step=1000000000) ->
    @iterator = 0

  get: ->
    res = @iterator++ / @step
    @iterator = 0 if @iterator > @step
    res

module.exports = Linear
