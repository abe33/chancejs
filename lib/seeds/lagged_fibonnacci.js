(function() {
  var Cloneable, Formattable, LaggedFibonnacci, Sourcable, include, _ref;

  _ref = require('mixinsjs'), Cloneable = _ref.Cloneable, Sourcable = _ref.Sourcable, Formattable = _ref.Formattable, include = _ref.include;

  LaggedFibonnacci = (function() {

    include([Cloneable('seed'), Sourcable('chancejs.LaggedFibonnacci', 'seed'), Formattable('LaggedFibonnacci', 'seed')])["in"](LaggedFibonnacci);

    function LaggedFibonnacci(seed) {
      if (seed == null) {
        seed = 0;
      }
      this.plantSeed(seed);
    }

    LaggedFibonnacci.prototype.get = function() {
      var uni;
      uni = this.u[this.i97] - this.u[this.j97];
      if (uni < 0.0) {
        uni += 1.0;
      }
      this.u[this.i97] = uni;
      if (--this.i97 < 0) {
        this.i97 = 96;
      }
      if (--this.j97 < 0) {
        this.j97 = 96;
      }
      this.c -= this.cd;
      if (this.c < 0.0) {
        this.c += this.cm;
      }
      uni -= this.c;
      if (uni < 0.0) {
        uni += 1.0;
      }
      return uni;
    };

    LaggedFibonnacci.prototype.plantSeed = function(seed) {
      var i, ii, ij, j, jj, k, kl, l, m, s, t, _i, _j, _ref1, _ref2;
      if (seed == null) {
        seed = 0;
      }
      this.u = new Array(97);
      ij = seed / 30082;
      kl = seed - 30082 * ij;
      i = ((ij / 177) % 177) + 2;
      j = (ij % 177) + 2;
      k = ((kl / 169) % 178) + 1;
      l = kl % 169;
      for (ii = _i = 0; _i <= 96; ii = ++_i) {
        _ref1 = [0.0, 0.5], s = _ref1[0], t = _ref1[1];
        for (jj = _j = 0; _j <= 23; jj = ++_j) {
          m = (((i * j) % 179) * k) % 179;
          _ref2 = [j, k, m], i = _ref2[0], j = _ref2[1], k = _ref2[2];
          l = (53 * l + 1) % 169;
          if ((l * m) % 64 >= 32) {
            s += t;
          }
          t *= 0.5;
        }
        this.u[ii] = s;
      }
      this.c = 362436.0 / 16777216.0;
      this.cd = 7654321.0 / 16777216.0;
      this.cm = 16777213.0 / 16777216.0;
      this.i97 = 96;
      return this.j97 = 32;
    };

    return LaggedFibonnacci;

  })();

  module.exports = LaggedFibonnacci;

}).call(this);
