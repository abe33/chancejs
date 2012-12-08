mixinsjs = require 'mixinsjs'

{Cloneable, Sourcable, Formattable, include} = mixinsjs

class LaggedFibonnacci
  include([
    Cloneable('seed')
    Sourcable('chancejs.LaggedFibonnacci','seed')
    Formattable('LaggedFibonnacci','seed')
  ]).in LaggedFibonnacci

  constructor: (seed=0) ->
    @plantSeed seed

  get: ->
    uni = @u[@i97] - @u[@j97]
    uni += 1.0 if uni < 0.0

    @u[@i97] = uni

    @i97 = 96 if --@i97 < 0
    @j97 = 96 if --@j97 < 0
    @c -= @cd
    @c += @cm if @c < 0.0
    uni -= @c
    uni += 1.0 if uni < 0.0
    uni

  plantSeed:(seed=0) ->
    @u = new Array 97
    ij = seed / 30082
    kl = seed - 30082 * ij

    i = ((ij / 177) % 177) + 2
    j = (ij % 177) + 2
    k = ((kl / 169) % 178) + 1
    l = kl % 169

    for ii in [0..96]
      [s,t] = [0.0, 0.5]

      for jj in [0..23]
        m = (((i * j) % 179) * k) % 179
        [i,j,k] = [j,k,m]
        l = (53 * l + 1) % 169
        s += t if (l * m) % 64 >= 32
        t *= 0.5

      @u[ii] = s

    @c = 362436.0 / 16777216.0
    @cd = 7654321.0 / 16777216.0
    @cm = 16777213.0 / 16777216.0
    @i97 = 96
    @j97 = 32

module.exports = LaggedFibonnacci
