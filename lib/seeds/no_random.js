(function() {
  var NoRandom;

  NoRandom = (function() {

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
