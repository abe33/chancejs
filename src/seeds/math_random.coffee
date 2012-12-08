{Cloneable, Sourcable, Formattable, include} = require 'mixinsjs'

class MathRandom
  include([
    Cloneable()
    Sourcable('chancejs.MathRandom')
    Formattable('MathRandom')
  ]).in MathRandom

  get: -> Math.random()

module.exports = MathRandom
