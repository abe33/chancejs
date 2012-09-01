require '../../test_helper'

Neat = require 'neat'
Linear = require '../../../lib/seeds/linear'
{print} = Neat.require 'utils/logs'

describe 'Linear generator', ->
  describe 'when created with an argument', ->
    it 'should return intermediate values with the given step', ->

      linear = new Linear(10)

      withLoop (n) ->
        expect(linear.get()).toBe (n % 11) / 10

  describe 'when created without an argument', ->
    it 'should return intermediate values with the default step', ->

      def = 1000000000

      linear = new Linear()

      withLoop (n) ->
        expect(linear.get()).toBe n / def


