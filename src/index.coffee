
module.exports =
  Random: require './random'
  NoRandom: require './seeds/no_random'
  MathRandom: require './seeds/math_random'
  Linear: require './seeds/linear'
  LinearCongruential: require './seeds/linear_congruential'
  LaggedFibonnacci: require './seeds/lagged_fibonnacci'
  MersenneTwister: require './seeds/mersenne_twister'