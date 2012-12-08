(function() {
  var Cloneable, Formattable, LinearCongruential, Sourcable, include, mixinsjs;

  mixinsjs = require('mixinsjs');

  Cloneable = mixinsjs.Cloneable, Sourcable = mixinsjs.Sourcable, Formattable = mixinsjs.Formattable, include = mixinsjs.include;

  LinearCongruential = (function() {

    include([Cloneable('seed'), Sourcable('chancejs.LinearCongruential', 'seed'), Formattable('LinearCongruential', 'seed')])["in"](LinearCongruential);

    function LinearCongruential(seed) {
      this.seed = seed != null ? seed : 1;
    }

    LinearCongruential.prototype.plantSeed = function(seed) {
      this.seed = seed != null ? seed : 1;
    };

    LinearCongruential.prototype.get = function() {
      var m, p, q, tmp;
      tmp = this.seed;
      q = tmp;
      q = q << 1;
      p = tmp << 32;
      m = p + q;
      if (m & 0x80000000) {
        m = m & 0x7fffffff;
        m++;
      }
      this.seed = m;
      return m / 0x80000000;
    };

    return LinearCongruential;

  })();

  module.exports = LinearCongruential;

}).call(this);
