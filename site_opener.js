var sketch = function (p) {
    var centerX;
    var centerY;
    var circleRadius;
    var imageRadius;
    var imageWidth;
    var frames = 60;
    var currentFrame = 0;
    var n = 0;
    var m = 600.0;
    var animations = "Animations";
    var javapps = "Java Apps";

    var fontArial;
    var imageDragon;
    p.preload = function () {
        fontArial = p.loadFont('images/arial.ttf');
        imageDragon = p.loadImage('images/dragon.png');
    }

    p.setup = function () {
        var canvas = p.createCanvas(600, 400);
        p.frameRate(30);

        centerX = p.width / 2;
        centerY = p.height / 2;
        circleRadius = p.width / 20;
        imageRadius = p.width / 10;
        imageWidth = imageRadius * 2;
    }

    p.draw = function () {  // draw() loops forever, until stopped
        var phase = (currentFrame / frames) % 1.0;
        var circleMovementRadius = p.width / 5;
        var motionX = p.cos(p.TAU * phase) * circleMovementRadius;
        var motionY = p.sin(p.TAU * phase) * circleMovementRadius;
        p.background(25);
        p.fill(160, 160, 255);

        p.textSize(30);
        p.textFont(fontArial);
        p.text(animations, n, 100);

        p.textSize(30);
        p.textFont(fontArial);
        p.text(javapps, m, 340);

        p.noStroke();
        p.square(
            centerX + motionX,
            centerY + motionY,
            circleRadius
        );

        p.image(
            imageDragon,
            centerX - imageRadius,
            centerY - imageRadius + (p.width / 40),
            imageWidth,
            imageWidth
        );

        n = n + currentFrame;
        m = m - currentFrame;
        currentFrame++;

        if (n >= p.width) {
            n = 0;
        }
        if (m <= p.textWidth(javapps) * -1) {
            m = p.width - p.textWidth(javapps);
        }
    }
};
new p5(sketch, 'sketch-holder1');
