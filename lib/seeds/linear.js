(function() {
  var Cloneable, Formattable, Linear, Sourcable, include, mixinsjs;

  mixinsjs = require('mixinsjs');

  Cloneable = mixinsjs.Cloneable, Sourcable = mixinsjs.Sourcable, Formattable = mixinsjs.Formattable, include = mixinsjs.include;

  Linear = (function() {

    include([Cloneable('step'), Sourcable('chancejs.Linear', 'step'), Formattable('Linear', 'step')])["in"](Linear);

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
