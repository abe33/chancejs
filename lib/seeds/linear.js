(function() {
  var Linear;

  Linear = (function() {

    function Linear(step) {
      this.step = step != null ? step : 1000000000;
      this.iterator = 0;
    }

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

  module.exports = Linear;

}).call(this);
