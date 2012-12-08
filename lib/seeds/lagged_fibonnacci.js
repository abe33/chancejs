(function() {
  var LaggedFibonnacci;

  LaggedFibonnacci = (function() {

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
      var i, ii, ij, j, jj, k, kl, l, m, s, t, _i, _j, _ref, _ref1;
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
        _ref = [0.0, 0.5], s = _ref[0], t = _ref[1];
        for (jj = _j = 0; _j <= 23; jj = ++_j) {
          m = (((i * j) % 179) * k) % 179;
          _ref1 = [j, k, m], i = _ref1[0], j = _ref1[1], k = _ref1[2];
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
