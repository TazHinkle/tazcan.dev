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
    var canvas = createCanvas(400, 400);
    canvas.parent('sasj-sketch');
    frameRate(30);
    lineWidth = width / 8;
    lineOffset = lineWidth / 2;
    objectSpacing = width / 7;
    strokeCap(SQUARE);
    // Source: https://colorhunt.co/palette/178346
    colors = [
      color('#faf4ff'),
      color('#f3c623'),
      color('#844685'),
      color('#10375c')
    ];
  }

  function drawLine(weight, colorInt) {
    stroke(colorInt);
    strokeWeight(weight);
    line(0, lineOffset, 0, -lineOffset);
  }

  function drawCross(weight, colorInt) {
    push();
    drawLine(weight, colorInt);
    rotate(TAU / 4);
    drawLine(weight, colorInt);
    pop();
  }

  function drawPhasedCross(phase, colorInt) {
    drawCross(
      (((cos(TAU * phase) + 1) / 2) * (lineWidth * 0.8)) + (lineWidth * 0.2),
      colorInt
    );
  }

  p.draw = function() {
    randomSeed(42);
    var phase = (currentFrame / frameCount) % 1;
    background(colors[0]);
    push();
    translate(width / 2, height / 2);

    rotate(TAU / 8);
    var axis = 5;
    var total = axis * axis;
    translate(
      (-objectSpacing * (axis - 1)) / 2,
      (-objectSpacing * (axis - 1)) / 2
    );
    for (var i = 0; i < total; i++) {
      var x = i % axis;
      var y = floor(i / axis);
      var colorIndex = floor(random(1, colorCount));
      var instancePhase = phase - (random(0, total) / total);
      push();
      translate(
        objectSpacing * x,
        objectSpacing * y
      );
      drawPhasedCross(instancePhase, colors[colorIndex]);
      pop();
    }

    pop();
    currentFrame++;
  }
};
new window.p5(sketch, 'sketch-holder');
