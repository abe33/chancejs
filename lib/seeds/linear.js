(function() {
  var Cloneable, Formattable, Linear, Sourcable, include, _ref;

  _ref = require('mixinsjs'), Cloneable = _ref.Cloneable, Sourcable = _ref.Sourcable, Formattable = _ref.Formattable, include = _ref.include;

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
