// This animation was inspired by https://twitter.com/sasj_nl/status/1242565584426094595
var sketch = function(p) {
  var frameCount = 60;
  var currentFrame = 0;
  var colorCount = 4;
  var colors;
  var lineWidth;
  var lineOffset;
  var objectSpacing;

  p.setup = function() {
    p.createCanvas(400, 400);
    p.frameRate(30);
    lineWidth = p.width / 8;
    lineOffset = lineWidth / 2;
    objectSpacing = p.width / 7;
    p.strokeCap(p.SQUARE);
    // Source: https://colorhunt.co/palette/178346
    colors = [
      p.color('#faf4ff'),
      p.color('#f3c623'),
      p.color('#844685'),
      p.color('#10375c')
    ];
  }

  function drawLine(weight, colorInt) {
    p.stroke(colorInt);
    p.strokeWeight(weight);
    p.line(0, lineOffset, 0, -lineOffset);
  }

  function drawCross(weight, colorInt) {
    p.push();
    drawLine(weight, colorInt);
    p.rotate(p.TAU / 4);
    drawLine(weight, colorInt);
    p.pop();
  }

  function drawPhasedCross(phase, colorInt) {
    drawCross(
      (((p.cos(p.TAU * phase) + 1) / 2) * (lineWidth * 0.8)) + (lineWidth * 0.2),
      colorInt
    );
  }

  p.draw = function() {
    p.randomSeed(42);
    var phase = (currentFrame / frameCount) % 1;
    p.background(colors[0]);
    p.push();
    p.translate(p.width / 2, p.height / 2);

    p.rotate(p.TAU / 8);
    var axis = 5;
    var total = axis * axis;
    p.translate(
      (-objectSpacing * (axis - 1)) / 2,
      (-objectSpacing * (axis - 1)) / 2
    );
    for (var i = 0; i < total; i++) {
      var x = i % axis;
      var y = p.floor(i / axis);
      var colorIndex = p.floor(p.random(1, colorCount));
      var instancePhase = phase - (p.random(0, total) / total);
      p.push();
      p.translate(
        objectSpacing * x,
        objectSpacing * y
      );
      drawPhasedCross(instancePhase, colors[colorIndex]);
      p.pop();
    }

    p.pop();
    currentFrame++;
  }
};
new window.p5(sketch, 'sasj-sketch');
