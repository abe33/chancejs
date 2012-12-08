(function() {
  var animate, animationStarted, requestAnimationFrame, seeders, testers;

  requestAnimationFrame = mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame || oRequestAnimationFrame || requestAnimationFrame || function(fn) {
    return setTimeout(fn, 1000 / 60);
  };

  seeders = [chancejs.LaggedFibonnacci, chancejs.LinearCongruential, chancejs.MathRandom, chancejs.MersenneTwister, chancejs.PaulHoule];

  testers = [];

  animationStarted = false;

  animate = function(t) {
    var tester, _i, _len;
    for (_i = 0, _len = testers.length; _i < _len; _i++) {
      tester = testers[_i];
      tester.animate(t);
    }
    return requestAnimationFrame(animate);
  };

  $(document).ready(function() {
    var seeder, tester, _i, _len;
    for (_i = 0, _len = seeders.length; _i < _len; _i++) {
      seeder = seeders[_i];
      tester = new Tester(seeder);
      tester.attach($('body'));
      testers.push(tester);
    }
    return $('div').click(function() {
      if (!animationStarted) {
        animate();
        return animationStarted = true;
      }
    });
  });

}).call(this);
