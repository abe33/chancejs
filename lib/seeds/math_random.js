(function() {
  var MathRandom;

  MathRandom = (function() {

    function MathRandom() {}

    MathRandom.prototype.get = function() {
      return Math.random();
    };

    return MathRandom;

  })();

  module.exports = MathRandom;

}).call(this);
