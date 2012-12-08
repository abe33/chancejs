(function() {
  var Random, Tester;

  Random = chancejs.Random;

  Tester = (function() {

    function Tester(seeder) {
      var i, _i;
      this.seeder = seeder;
      this.distributionRandom = this.getRandom();
      this.gridRandom = this.getRandom();
      this.scrollRandom = this.getRandom();
      this.distributionValues = [];
      for (i = _i = 0; _i <= 20; i = ++_i) {
        this.distributionValues[i] = 0;
      }
      this.display = this.createDisplay(this.seeder);
      this.count = 0;
      this.counter = this.display.children('.generated').children('.value');
      this.benchmark = this.display.children('.benchmark').children('.value');
      this.distribution = this.display.children('.distribution');
      this.grid = this.display.children('.grid');
      this.scroll = this.display.children('.scroll');
      this.distributionContext = this.distribution[0].getContext('2d');
      this.gridContext = this.grid[0].getContext('2d');
      this.scrollContext = this.scroll[0].getContext('2d');
    }

    Tester.prototype.getRandom = function() {
      return new Random(new this.seeder(123456789));
    };

    Tester.prototype.createDisplay = function(seeder) {
      var seederName;
      seederName = seeder.name;
      return $("<div id='" + (seederName.toLowerCase()) + "'>          <h4>" + seederName + "</h4>          <canvas class='distribution' width='140px' height='60px'></canvas>          <span class='benchmark'>            Benchmark (10000 loops):            <span class='value'>0</span>ms          </span>          <span class='generated'>            Generated:            <span class='value'>0</span>          </span>          <canvas class='grid' width='40px' height='40px'></canvas><canvas class='scroll' width='90px' height='40px'></canvas>       </div>");
    };

    Tester.prototype.animate = function(t) {
      var i, ms, n, r, _i;
      this.count++;
      ms = new Date().getTime();
      r = this.getRandom();
      for (i = _i = 0; _i <= 10000; i = ++_i) {
        n = r.get();
      }
      this.time = new Date().getTime() - ms;
      return this.update();
    };

    Tester.prototype.update = function() {
      this.counter.text(this.count);
      this.benchmark.text(this.time);
      this.updateDistribution();
      this.updateGrid();
      return this.updateScroll();
    };

    Tester.prototype.updateGrid = function() {
      var x, y;
      x = this.gridRandom.get();
      y = this.gridRandom.get();
      this.gridContext.fillStyle = "rgb(10,206,247)";
      return this.gridContext.fillRect(x * 40, y * 40, 1, 1);
    };

    Tester.prototype.updateScroll = function() {
      var img, y;
      img = this.scrollContext.getImageData(1, 0, 89, 40);
      this.scrollContext.putImageData(img, 0, 0);
      this.scrollContext.fillStyle = "#ffffff";
      this.scrollContext.fillRect(89, 0, 1, 40);
      y = this.scrollRandom.get();
      this.scrollContext.fillStyle = "rgb(10,206,247)";
      return this.scrollContext.fillRect(89, y * 40, 1, 1);
    };

    Tester.prototype.updateDistribution = function() {
      var h, i, max, n, v, w, _i, _j, _len, _len1, _ref, _ref1, _results;
      this.cleanUp(this.distributionContext);
      v = this.distributionRandom.get();
      i = Math.round(v * 20);
      this.distributionValues[i]++;
      max = 0;
      _ref = this.distributionValues;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        n = _ref[_i];
        max = Math.max(max, n);
      }
      w = 140 / this.distributionValues.length;
      _ref1 = this.distributionValues;
      _results = [];
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        n = _ref1[i];
        h = 60 * n / max;
        this.distributionContext.fillStyle = "rgba(10,206,247,0.3)";
        this.distributionContext.fillRect(i * w, 60 - h, w, h);
        this.distributionContext.lineWidth = 0.5;
        this.distributionContext.strokeStyle = 'rgb(10,206,247)';
        _results.push(this.distributionContext.strokeRect(i * w, 60 - h, w, h));
      }
      return _results;
    };

    Tester.prototype.cleanUp = function(ctx) {
      ctx.fillStyle = '#ffffff';
      return ctx.fillRect(0, 0, 140, 60);
    };

    Tester.prototype.attach = function(container) {
      return container.append(this.display);
    };

    return Tester;

  })();

  module.exports = Tester;

}).call(this);
