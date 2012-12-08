(function() {
  var Cloneable, Formattable, PaulHoule, Sourcable, include, mixinsjs;

  mixinsjs = require('mixinsjs');

  Cloneable = mixinsjs.Cloneable, Sourcable = mixinsjs.Sourcable, Formattable = mixinsjs.Formattable, include = mixinsjs.include;

  PaulHoule = (function() {

    include([Cloneable('seed'), Sourcable('chancejs.PaulHoule', 'seed'), Formattable('PaulHoule', 'seed')])["in"](PaulHoule);

    function PaulHoule(seed) {
      this.seed = seed;
    }

    PaulHoule.prototype.get = function() {
      this.seed = (this.seed * 9301 + 49297) % 233280;
      return this.seed / 233280.0;
    };

    return PaulHoule;

  })();

  module.exports = PaulHoule;

}).call(this);
