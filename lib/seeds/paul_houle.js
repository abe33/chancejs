(function() {
  var Cloneable, Formattable, PaulHoule, Sourcable, include, _ref;

  _ref = require('mixinsjs'), Cloneable = _ref.Cloneable, Sourcable = _ref.Sourcable, Formattable = _ref.Formattable, include = _ref.include;

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
