(function() {
  var LaggedFibonnacci, Linear, LinearCongruential, MathRandom, MersenneTwister, NoRandom, PaulHoule, Random, floor, round;

  this.chancejs || (this.chancejs = {});

  /* src/seeds/no_random.coffee */;


  /* src/seeds/no_random.coffee<NoRandom> line:1 */;


  NoRandom = (function() {
    /* src/seeds/no_random.coffee<NoRandom::constructor> line:2 */;

    function NoRandom(seed) {
      this.seed = seed != null ? seed : 0;
    }

    /* src/seeds/no_random.coffee<NoRandom::get> line:3 */;


    NoRandom.prototype.get = function() {
      return this.seed;
    };

    return NoRandom;

  })();

  /* src/seeds/math_random.coffee */;


  /* src/seeds/math_random.coffee<MathRandom> line:1 */;


  MathRandom = (function() {

    function MathRandom() {}

    /* src/seeds/math_random.coffee<MathRandom::get> line:2 */;


    MathRandom.prototype.get = function() {
      return Math.random();
    };

    return MathRandom;

  })();

  /* src/seeds/linear.coffee */;


  /* src/seeds/linear.coffee<Linear> line:2 */;


  Linear = (function() {
    /* src/seeds/linear.coffee<Linear::constructor> line:3 */;

    function Linear(step) {
      this.step = step != null ? step : 1000000000;
      this.iterator = 0;
    }

    /* src/seeds/linear.coffee<Linear::get> line:6 */;


    Linear.prototype.get = function() {
      var res;
      res = this.iterator++ / this.step;
      if (this.iterator > this.step) {
        this.iterator = 0;
      }
      return res;
    };

    return Linear;

  })();

  /* src/seeds/linear_congruential.coffee */;


  /* src/seeds/linear_congruential.coffee<LinearCongruential> line:2 */;


  LinearCongruential = (function() {
    /* src/seeds/linear_congruential.coffee<LinearCongruential::constructor> line:3 */;

    function LinearCongruential(seed) {
      this.seed = seed != null ? seed : 1;
    }

    /* src/seeds/linear_congruential.coffee<LinearCongruential::plantSeed> line:4 */;


    LinearCongruential.prototype.plantSeed = function(seed) {
      this.seed = seed != null ? seed : 1;
    };

    /* src/seeds/linear_congruential.coffee<LinearCongruential::get> line:6 */;


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

  /* src/seeds/lagged_fibonnacci.coffee */;


  /* src/seeds/lagged_fibonnacci.coffee<LaggedFibonnacci> line:2 */;


  LaggedFibonnacci = (function() {
    /* src/seeds/lagged_fibonnacci.coffee<LaggedFibonnacci::constructor> line:3 */;

    function LaggedFibonnacci(seed) {
      if (seed == null) {
        seed = 0;
      }
      this.plantSeed(seed);
    }

    /* src/seeds/lagged_fibonnacci.coffee<LaggedFibonnacci::get> line:6 */;


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

    /* src/seeds/lagged_fibonnacci.coffee<LaggedFibonnacci::plantSeed> line:20 */;


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

  /* src/seeds/mersenne_twister.coffee */;


  /* src/seeds/mersenne_twister.coffee<MersenneTwister> line:1 */;


  MersenneTwister = (function() {
    /* src/seeds/mersenne_twister.coffee<MersenneTwister::constructor> line:2 */;

    function MersenneTwister(seed) {
      if (seed == null) {
        seed = 0;
      }
      this.mt = Array(623);
      this.z = 0;
      this.y = 0;
      this.plantSeed(seed);
    }

    /* src/seeds/mersenne_twister.coffee<MersenneTwister::plantSeed> line:9 */;


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

    /* src/seeds/mersenne_twister.coffee<MersenneTwister::get> line:13 */;


    MersenneTwister.prototype.get = function() {
      if (this.z >= 623) {
        this.generateNumbers();
      }
      return this.extractNumber(this.z++) / 0x80000000;
    };

    /* src/seeds/mersenne_twister.coffee<MersenneTwister::generateNumbers> line:17 */;


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

    /* src/seeds/mersenne_twister.coffee<MersenneTwister::extractNumber> line:27 */;


    MersenneTwister.prototype.extractNumber = function(i) {
      this.y = this.mt[i];
      this.y ^= this.y >> 11;
      this.y ^= (this.y << 7) & 0x9d2c5680;
      this.y ^= (this.y << 15) & 0xefc60000;
      return this.y ^= this.y >> 18;
    };

    return MersenneTwister;

  })();

  /* src/seeds/paul_houle.coffee */;


  /* src/seeds/paul_houle.coffee<PaulHoule> line:6 */;


  PaulHoule = (function() {
    /* src/seeds/paul_houle.coffee<PaulHoule::constructor> line:7 */;

    function PaulHoule(seed) {
      this.seed = seed;
    }

    /* src/seeds/paul_houle.coffee<PaulHoule::get> line:8 */;


    PaulHoule.prototype.get = function() {
      this.seed = (this.seed * 9301 + 49297) % 233280;
      return this.seed / 233280.0;
    };

    return PaulHoule;

  })();

  /* src/random.coffee */;


  floor = Math.floor, round = Math.round;

  /* src/random.coffee<Random> line:4 */;


  Random = (function() {
    /* src/random.coffee<Random::constructor> line:5 */;

    function Random(generator) {
      this.generator = generator;
    }

    /* src/random.coffee<Random::get> line:7 */;


    Random.prototype.get = function() {
      return this.generator.get();
    };

    /* src/random.coffee<Random::boolean> line:9 */;


    Random.prototype.boolean = function(rate) {
      if (rate == null) {
        rate = 0.5;
      }
      if (!((0 <= rate && rate <= 1))) {
        rate = 0.5;
      }
      return this.get() < rate;
    };

    /* src/random.coffee<Random::bit> line:10 */;


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

    /* src/random.coffee<Random::sign> line:11 */;


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

    /* src/random.coffee<Random::char> line:13 */;


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

    /* src/random.coffee<Random::inRange> line:30 */;


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

    /* src/random.coffee<Random::inArray> line:39 */;


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

    /* src/random.coffee<Random::in> line:66 */;


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

    /* src/random.coffee<Random::sort> line:79 */;


    Random.prototype.sort = function() {
      var _this = this;
      return function() {
        return _this.intPad(2);
      };
    };

    /* src/random.coffee<Random::random> line:81 */;


    Random.prototype.random = function(amount) {
      return this.get() * (amount || 1);
    };

    /* src/random.coffee<Random::intRandom> line:82 */;


    Random.prototype.intRandom = function(amount) {
      return round(this.random(amount));
    };

    /* src/random.coffee<Random::pad> line:84 */;


    Random.prototype.pad = function(amount) {
      return amount / 2 - this.random(amount);
    };

    /* src/random.coffee<Random::intPad> line:85 */;


    Random.prototype.intPad = function(amount) {
      return round(this.pad(amount));
    };

    return Random;

  })();

  this.chancejs.NoRandom = NoRandom;

  this.chancejs.MathRandom = MathRandom;

  this.chancejs.Linear = Linear;

  this.chancejs.LinearCongruential = LinearCongruential;

  this.chancejs.LaggedFibonnacci = LaggedFibonnacci;

  this.chancejs.MersenneTwister = MersenneTwister;

  this.chancejs.PaulHoule = PaulHoule;

  this.chancejs.Random = Random;

}).call(this);
