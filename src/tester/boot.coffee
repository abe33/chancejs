
requestAnimationFrame = mozRequestAnimationFrame or
                        webkitRequestAnimationFrame or
                        msRequestAnimationFrame or
                        oRequestAnimationFrame or
                        requestAnimationFrame or
                        (fn) -> setTimeout fn, 1000 / 60


seeders = [
  chancejs.LaggedFibonnacci
  chancejs.LinearCongruential
  chancejs.MathRandom
  chancejs.MersenneTwister
  chancejs.PaulHoule
]

testers = []

animationStarted = false
animate = (t) ->
  tester.animate t for tester in testers
  requestAnimationFrame animate

$(document).ready ->
  for seeder in seeders
    tester = new Tester seeder
    tester.attach($('body'))
    testers.push tester

  $('div').click ->
    unless animationStarted
      animate()
      animationStarted = true


