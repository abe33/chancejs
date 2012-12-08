(function() {
  var Cloneable, Formattable, Random, Sourcable, floor, include, mixinsjs, round;

  mixinsjs = require('mixinsjs');

  Cloneable = mixinsjs.Cloneable, Sourcable = mixinsjs.Sourcable, Formattable = mixinsjs.Formattable, include = mixinsjs.include;

  floor = Math.floor, round = Math.round;

  Random = (function() {

    include([Cloneable('generator'), Sourcable('chancejs.Random', 'generator'), Formattable('Random', 'generator')])["in"](Random);

    function Random(generator) {
      this.generator = generator;
    }

    Random.prototype.get = function() {
      return this.generator.get();
    };

    Random.prototype.boolean = function(rate) {
      if (rate == null) {
        rate = 0.5;
      }
      if (!((0 <= rate && rate <= 1))) {
        rate = 0.5;
      }
      return this.get() < rate;
    };

    Random.prototype.bit = function(rate) {
      if (rate == null) {
        rate = 0.5;
      }
      if (this.boolean(rate)) {
        return 1;
      } else {
        return 0;
      }
    };

    Random.prototype.sign = function(rate) {
      if (rate == null) {
        rate = 0.5;
      }
      if (this.boolean(rate)) {
        return 1;
      } else {
        return -1;
      }
    };

    Random.prototype.char = function(arg, rangeEnd) {
      var n, str, _ref;
      if (arg == null) {
        _ref = ['abcdefghijklmnopqrstuvwxyz', null], arg = _ref[0], rangeEnd = _ref[1];
      }
      switch (typeof arg) {
        case 'string':
          if (typeof rangeEnd === 'string') {
            str = '';
            arg.to(rangeEnd, function(c) {
              return str += c;
            });
            arg = str;
          }
          return arg.substr(this.intRandom(arg.length - 1), 1);
        case 'number':
          if (typeof rangeEnd === 'number') {
            return n = String.fromCharCode(floor(this.inRange(arg, rangeEnd)));
          } else {
            return String.fromCharCode(this.intRandom(arg));
          }
      }
    };

    Random.prototype.inRange = function(a, b, c) {
      var r, res;
      res = a + this.random(b - a);
      if (typeof c === 'number') {
        r = 1 / c;
        if (floor(res * r) !== res * r) {
          res -= res % c;
        }
      }
      res = floor(res * 1000000000) / 1000000000;
      return res;
    };

    Random.prototype.inArray = function(array, ratios, summed) {
      var a, b, i, last, n, rand, sum, v, _i, _j, _k, _len, _len1, _len2;
      if (array != null) {
        if (ratios != null) {
          if (ratios.length !== array.length) {
            throw new Error('array and ratios arrays must have the same length');
          }
          if (summed) {
            for (i = _i = 0, _len = ratios.length; _i < _len; i = ++_i) {
              b = ratios[i];
              if (i > 0) {
                a = ratios[i - 1];
                if (a > b) {
                  throw new Error('ratios must be ordered when summed is true');
                }
              }
            }
          }
          if (summed) {
            last = ratios[ratios.length - 1];
            ratios = ratios.map(function(n) {
              return n / last;
            });
          } else {
            sum = ratios.reduce(function(a, b) {
              return a + b;
            });
            ratios = ratios.map(function(n) {
              return n / sum;
            });
            for (i = _j = 0, _len1 = ratios.length; _j < _len1; i = ++_j) {
              n = ratios[i];
              if (i > 0) {
                ratios[i] += ratios[i - 1];
              }
            }
          }
          rand = this.get();
          for (i = _k = 0, _len2 = ratios.length; _k < _len2; i = ++_k) {
            v = ratios[i];
            if (rand <= v) {
              return array[i];
            }
          }
        } else {
          return array[this.intRandom(array.length - 1)];
        }
      } else {
        return null;
      }
    };

    Random.prototype["in"] = function(a, b, c) {
      if (arguments.length > 3) {
        return this.inArray(arguments);
      } else {
        switch (typeof a) {
          case 'number':
            return this.inRange(a, b);
          case 'string':
            return this.inArray(a, b, c);
          case 'object':
            if (Object.prototype.toString.call(a) === '[object Array]') {
              return this.inArray(a, b, c);
            } else {
              if ((a.min != null) && (a.max != null)) {
                return this.inRange(a.min, a.max, a.step);
              }
            }
            break;
          default:
            return null;
        }
      }
    };

    Random.prototype.sort = function() {
      var _this = this;
      return function() {
        return _this.intPad(2);
      };
    };

    Random.prototype.random = function(amount) {
      return this.get() * (amount || 1);
    };

    Random.prototype.intRandom = function(amount) {
      return round(this.random(amount));
    };

    Random.prototype.pad = function(amount) {
      return amount / 2 - this.random(amount);
    };

    Random.prototype.intPad = function(amount) {
      return round(this.pad(amount));
    };

    return Random;

  })();

  module.exports = Random;

}).call(this);
