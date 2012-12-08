(function() {
  var Cloneable, Formattable, MathRandom, Sourcable, include, mixinsjs;

  mixinsjs = require('mixinsjs');

  Cloneable = mixinsjs.Cloneable, Sourcable = mixinsjs.Sourcable, Formattable = mixinsjs.Formattable, include = mixinsjs.include;

  MathRandom = (function() {

    function MathRandom() {}

    include([Cloneable(), Sourcable('chancejs.MathRandom'), Formattable('MathRandom')])["in"](MathRandom);

    MathRandom.prototype.get = function() {
      return Math.random();
    };

    return MathRandom;

  })();

  module.exports = MathRandom;

}).call(this);
