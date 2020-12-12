
var toyCanvas = document.getElementById('toy-canvas');
var audio = document.getElementById('layer1');
var context = toyCanvas.getContext('2d');

var startButton = document.getElementById('start-button');
startButton.addEventListener('click', function () {
    audio.loop = true;
    audio.play();
});

var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', function () {
    audio.pause();
});

var tau = Math.PI * 2;
var getCoordinatesFromAngleAndLength = function(angle, length) {
    return {
        x: (Math.cos(angle) * length),
        y: (Math.sin(angle) * length),
    }
}

var dartSize = 20;
var dartAngleA = (5 / 12) * tau;
var dartAngleB = (0 / 12) * tau;
var dartAngleC = (7 / 12) * tau;
var drawDart = function(point, angle) {
    var points = [
        getCoordinatesFromAngleAndLength(angle + dartAngleA, dartSize),
        getCoordinatesFromAngleAndLength(angle + dartAngleB, dartSize),
        getCoordinatesFromAngleAndLength(angle + dartAngleC, dartSize),
    ];
    drawPolyLine(points, point);
}

var drawPolyLine = function(points, offset) {
    context.beginPath();
    context.moveTo(
        points[0].x + offset.x,
        points[0].y + offset.y
    );

    points.slice(1).forEach(function (point) {
        context.lineTo(
            point.x + offset.x,
            point.y + offset.y
        );
    })
    context.strokeStyle = 'red';
    // context.fillStyle = wiggle.fillStyle;
    context.stroke();
    // context.fill();
};

var cursorPosition = {
    x: toyCanvas.width / 2,
    y: toyCanvas.height / 2
}
var lastCursorPosition = {
    x: toyCanvas.width / 2,
    y: toyCanvas.height / 2
}

var dartAngle = 0;

toyCanvas.addEventListener('mousemove', function (event) {
    lastCursorPosition.x = cursorPosition.x;
    lastCursorPosition.y = cursorPosition.y;
    cursorPosition.x = event.offsetX;
    cursorPosition.y = event.offsetY;
    var differenceVector = subtractPoints(cursorPosition, lastCursorPosition);
    dartAngle = Math.atan2(differenceVector.y, differenceVector.x);
});

var subtractPoints = function (pointA, pointB) {
    return {
        x: pointA.x - pointB.x,
        y: pointA.y - pointB.y,
    };
}

var animationLoop = function() {
    // var numberOfSecondsSincePageLoad = time / 1000;
    requestAnimationFrame(animationLoop);
    context.clearRect(
        0,
        0,
        toyCanvas.width,
        toyCanvas.height
    );

    drawDart(cursorPosition, dartAngle);
}

requestAnimationFrame(animationLoop);
