(function() {
  var PaulHoule;

  PaulHoule = (function() {

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
