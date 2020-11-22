var sketch = function (p) {
    var centerX;
    var centerY;
    var imageRadius;
    var imageWidth;
    var frames = 60;
    var currentFrame = 0;
    var n = 0;
    var m = 600.0;
    var animations = "Animations";
    var javapps = "Projects";

    var fontArial;
    var imageDragon;
    p.preload = function () {
        fontArial = p.loadFont('https://tazcan.dev/images/arial.ttf');
        imageDragon = p.loadImage('https://tazcan.dev/images/dragon.png');
    }

    p.setup = function () {
        p.createCanvas(600, 400);
        p.frameRate(30);

        centerX = p.width / 2;
        centerY = p.height / 2;
        imageRadius = p.width / 10;
        imageWidth = imageRadius * 2;
    }

    p.draw = function () {  // draw() loops forever, until stopped
        var phase = (currentFrame / frames) % 1.0;
        var circleMovementRadius = p.width / 5;
        p.background(25);
        p.fill(160, 160, 255);

        p.textSize(30);
        p.textFont(fontArial);
        p.text(animations, n, 100);

        p.textSize(30);
        p.textFont(fontArial);
        p.text(javapps, m, 340);

        p.noStroke();

        p.push();
        p.translate(
            centerX,
            centerY
        );
        p.rotate(p.TAU * phase);
        p.translate(circleMovementRadius, 0);
        p.rotate(p.PI);
        p.image(
            imageDragon,
            -imageRadius / 2,
            -imageRadius / 2,
            imageWidth / 2,
            imageWidth / 2
        );
        p.pop();

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
new window.p5(sketch, 'intro-sketch');
