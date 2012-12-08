(function() {
  var Cloneable, Formattable, MersenneTwister, Sourcable, include, mixinsjs;

  mixinsjs = require('mixinsjs');

  Cloneable = mixinsjs.Cloneable, Sourcable = mixinsjs.Sourcable, Formattable = mixinsjs.Formattable, include = mixinsjs.include;

  MersenneTwister = (function() {

    include([Cloneable('seed'), Sourcable('chancejs.MersenneTwister', 'seed'), Formattable('MersenneTwister', 'seed')])["in"](MersenneTwister);

    function MersenneTwister(seed) {
      if (seed == null) {
        seed = 0;
      }
      this.mt = Array(623);
      this.z = 0;
      this.y = 0;
      this.plantSeed(seed);
    }

    MersenneTwister.prototype.plantSeed = function(seed) {
      var i, _i, _results;
      if (seed == null) {
        seed = 0;
      }
      this.mt[0] = seed;
      _results = [];
      for (i = _i = 1; _i <= 623; i = ++_i) {
        _results.push(this.mt[i] = ((0x10dcd * this.mt[i - 1]) + 1) & 0xFFFFFFFF);
      }
      return _results;
    };

    MersenneTwister.prototype.get = function() {
      if (this.z >= 623) {
        this.generateNumbers();
      }
      return this.extractNumber(this.z++) / 0x80000000;
    };

    MersenneTwister.prototype.generateNumbers = function() {
      var i, _i, _results;
      this.z = 0;
      _results = [];
      for (i = _i = 0; _i <= 623; i = ++_i) {
        this.y = 0x80000000 & this.mt[i] + 0x7FFFFFFF & this.mt[(i + 1) % 623];
        if (this.y % 2 === 0) {
          _results.push(this.mt[i] = this.mt[(i + 397) % 623] ^ (this.y >> 1));
        } else {
          _results.push(this.mt[i] = this.mt[(i + 397) % 623] ^ (this.y >> 1) ^ 0x9908B0DF);
        }
      }
      return _results;
    };

    MersenneTwister.prototype.extractNumber = function(i) {
      this.y = this.mt[i];
      this.y ^= this.y >> 11;
      this.y ^= (this.y << 7) & 0x9d2c5680;
      this.y ^= (this.y << 15) & 0xefc60000;
      return this.y ^= this.y >> 18;
    };

    return MersenneTwister;

  })();

  module.exports = MersenneTwister;

}).call(this);
