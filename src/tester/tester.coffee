{Random} = chancejs

class Tester
  constructor: (@seeder) ->
    @distributionRandom = @getRandom()
    @gridRandom = @getRandom()
    @scrollRandom = @getRandom()

    @distributionValues = []
    @distributionValues[i] = 0 for i in [0..20]

    @display = @createDisplay @seeder
    @count = 0

    @counter = @display.children('.generated').children('.value')
    @benchmark = @display.children('.benchmark').children('.value')

    @distribution = @display.children('.distribution')
    @grid = @display.children('.grid')
    @scroll = @display.children('.scroll')

    @distributionContext = @distribution[0].getContext '2d'
    @gridContext = @grid[0].getContext '2d'
    @scrollContext = @scroll[0].getContext '2d'

  getRandom: -> new Random new @seeder 123456789

  createDisplay: (seeder) ->
    seederName = seeder.name
    $ "<div id='#{seederName.toLowerCase()}'>
          <h4>#{seederName}</h4>

          <canvas class='distribution' width='140px' height='60px'></canvas>

          <span class='benchmark'>
            Benchmark (10000 loops):
            <span class='value'>0</span>ms
          </span>

          <span class='generated'>
            Generated:
            <span class='value'>0</span>
          </span>

          <canvas class='grid' width='40px' height='40px'></canvas><canvas class='scroll' width='90px' height='40px'></canvas>
       </div>"

  animate: (t) ->
    @count++

    ms = new Date().getTime()
    r = @getRandom()
    n = r.get() for i in [0..10000]
    @time = new Date().getTime() - ms

    @update()

  update: ->
    @counter.text @count
    @benchmark.text @time

    @updateDistribution()
    @updateGrid()
    @updateScroll()

  updateGrid: ->
    x = @gridRandom.get()
    y = @gridRandom.get()

    @gridContext.fillStyle = "rgb(10,206,247)"
    @gridContext.fillRect x*40, y*40, 1, 1

  updateScroll: ->

    img = @scrollContext.getImageData(1,0,89,40)
    @scrollContext.putImageData(img,0,0)
    @scrollContext.fillStyle = "#ffffff"
    @scrollContext.fillRect 89, 0, 1, 40

    y = @scrollRandom.get()

    @scrollContext.fillStyle = "rgb(10,206,247)"
    @scrollContext.fillRect 89, y*40, 1, 1


  updateDistribution: ->
    @cleanUp @distributionContext

    v = @distributionRandom.get()
    i = Math.round v * 20

    @distributionValues[i]++
    max = 0
    max = Math.max max, n for n in @distributionValues

    w = 140 / @distributionValues.length

    for n,i in @distributionValues
      h = 60 * n / max

      @distributionContext.fillStyle = "rgba(10,206,247,0.3)"
      @distributionContext.fillRect i*w, 60-h, w, h

      @distributionContext.lineWidth = 0.5
      @distributionContext.strokeStyle = 'rgb(10,206,247)'
      @distributionContext.strokeRect i*w, 60-h, w, h



  cleanUp: (ctx) ->
    ctx.fillStyle = '#ffffff'
    ctx.fillRect 0, 0, 140, 60

  attach: (container) ->
    container.append @display


module.exports = Tester
