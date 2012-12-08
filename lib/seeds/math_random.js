(function() {
  var Cloneable, Formattable, MathRandom, Sourcable, include, _ref;

  _ref = require('mixinsjs'), Cloneable = _ref.Cloneable, Sourcable = _ref.Sourcable, Formattable = _ref.Formattable, include = _ref.include;

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
