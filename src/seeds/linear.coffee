
class Linear
  constructor: (@step=1000000000) ->
    @iterator = 0

  get: ->
    res = @iterator++ / @step
    @iterator = 0 if @iterator > @step
    res

module.exports = Linear
