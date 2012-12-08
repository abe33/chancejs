(function() {
  var Cloneable, Formattable, NoRandom, Sourcable, include, _ref;

  _ref = require('mixinsjs'), Cloneable = _ref.Cloneable, Sourcable = _ref.Sourcable, Formattable = _ref.Formattable, include = _ref.include;

  NoRandom = (function() {

    include([Cloneable('seed'), Sourcable('chancejs.NoRandom', 'seed'), Formattable('NoRandom', 'seed')])["in"](NoRandom);

    function NoRandom(seed) {
      this.seed = seed != null ? seed : 0;
    }

    NoRandom.prototype.get = function() {
      return this.seed;
    };

    return NoRandom;

  })();

  module.exports = NoRandom;

}).call(this);
