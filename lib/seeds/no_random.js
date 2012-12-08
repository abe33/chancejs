(function() {
  var Cloneable, Formattable, NoRandom, Sourcable, include, mixinsjs;

  mixinsjs = require('mixinsjs');

  Cloneable = mixinsjs.Cloneable, Sourcable = mixinsjs.Sourcable, Formattable = mixinsjs.Formattable, include = mixinsjs.include;

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
