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
    };
};

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
};

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
    });
    context.strokeStyle = 'red';
    context.stroke();
};

var makeTarget = function() {
    return {
        x: Math.random() * toyCanvas.width,
        y: toyCanvas.height / 4,
        radius: toyCanvas.height / ((Math.random() * 5) + 5)
    };
};

var currentTarget = makeTarget();

var drawTarget = function (target) {
    context.beginPath();
    context.arc(
        target.x,
        target.y,
        target.radius,
        0,
        tau
    );
    context.strokeStyle = 'white';
    context.fillStyle = 'white';
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(
        target.x,
        target.y,
        target.radius / 2,
        0,
        tau
    );
    context.strokeStyle = 'red';
    context.fillStyle = 'red';
    context.stroke();
    context.fill();
}

var cursorPosition = {
    x: toyCanvas.width / 2,
    y: toyCanvas.height / 2
};
var lastCursorPosition = {
    x: toyCanvas.width / 2,
    y: toyCanvas.height / 2
};

var currentDart = {
    x: 0,
    y: 0,
    angle: 0
};

var isDartFlying = false;
var relativeMotionVector = {
    x: 0,
    y: 0,
};

toyCanvas.addEventListener('mousemove', function (event) {
    lastCursorPosition.x = cursorPosition.x;
    lastCursorPosition.y = cursorPosition.y;
    cursorPosition.x = event.offsetX;
    cursorPosition.y = event.offsetY;
    if (!isDartFlying) {
        currentDart.x = cursorPosition.x;
        currentDart.y = cursorPosition.y;
        relativeMotionVector = subtractPoints(cursorPosition, lastCursorPosition);
        currentDart.angle = Math.atan2(relativeMotionVector.y, relativeMotionVector.x);
    }
});

toyCanvas.addEventListener('mouseup', function () {
    console.log("relativeMotionVector", relativeMotionVector);
    isDartFlying = true;
});

var subtractPoints = function (pointA, pointB) {
    return {
        x: pointA.x - pointB.x,
        y: pointA.y - pointB.y,
    };
};
var addPoints = function (pointA, pointB) {
    return {
        x: pointA.x + pointB.x,
        y: pointA.y + pointB.y,
    };
};

var getLength = function(pointA, pointB) {
    var diffPoint = subtractPoints(pointA, pointB);
    return Math.sqrt((diffPoint.x * diffPoint.x) + (diffPoint.y * diffPoint.y));
};

var isDartOffScreen = function(currentDart) {
    return (
        currentDart.x > toyCanvas.width ||
        currentDart.y > toyCanvas.height ||
        currentDart.x < 0 ||
        currentDart.y < 0
    );
}

var resetDart = function() {
    isDartFlying = false;
    currentDart.x = cursorPosition.x;
    currentDart.y = cursorPosition.y;
}

var isDartCollidingWithTarget = function(currentDart, currentTarget) {
    var distanceToTargetCenter = getLength(currentDart, currentTarget);
    return (distanceToTargetCenter < currentTarget.radius);
}

var animationLoop = function() {
    requestAnimationFrame(animationLoop);
    context.clearRect(
        0,
        0,
        toyCanvas.width,
        toyCanvas.height
    );
    if(isDartFlying) {
        var dartPositionPlusRelativeMotionVector = addPoints(currentDart, relativeMotionVector);
        currentDart.x = dartPositionPlusRelativeMotionVector.x;
        currentDart.y = dartPositionPlusRelativeMotionVector.y;
    }
    drawTarget(currentTarget);
    drawDart(currentDart, currentDart.angle);
    if(isDartCollidingWithTarget(currentDart, currentTarget)) {
        currentTarget = makeTarget();
        resetDart();
    }
    if(isDartOffScreen(currentDart)) {
        resetDart();
    }
};

requestAnimationFrame(animationLoop);
