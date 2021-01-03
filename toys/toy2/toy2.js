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
var playerYLimit = toyCanvas.height * (2 / 3);
var score = 0;
var dartsPerGame = 5;
var dartsRemaining = dartsPerGame;
var dartSize = 10;
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

var drawScoreText = function() {
    var measurement = toyCanvas.width / 20;
    context.fillStyle = '#ffffff';
    context.font = measurement + 'px sans-serif';
    context.fillText(
        'score: ' + score,
        measurement,
        measurement * 1.5
    );
};

var drawGameOver = function() {
    var measurement = toyCanvas.width / 10;
    context.fillStyle = '#ffffff';
    context.font = measurement + 'px sans-serif';
    context.fillText(
        'GAME OVER',
        measurement,
        measurement * 1.5
    );
    context.fillText(
        'score: ' + score,
        measurement,
        measurement * 3
    );
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
    context.lineWidth = 3;
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

var currentDart = null;
var isDartFlying = false;
var relativeMotionVector = {
    x: 0,
    y: 0,
};

var resetGame = function() {
    isGameOver = false;
    dartsRemaining = dartsPerGame;
    isDartFlying = false;
    score = 0;
    currentTarget = makeTarget();
}

var updateDartToCursor = function(dart) {
    dart.x = cursorPosition.x;
    dart.y = cursorPosition.y;
    relativeMotionVector = subtractPoints(cursorPosition, lastCursorPosition);
    dart.angle = Math.atan2(relativeMotionVector.y, relativeMotionVector.x);
}

toyCanvas.addEventListener('mousemove', function (event) {
    lastCursorPosition.x = cursorPosition.x;
    lastCursorPosition.y = cursorPosition.y;
    cursorPosition.x = event.offsetX;
    cursorPosition.y = event.offsetY;
    if (
        currentDart &&
        !isDartFlying &&
        cursorPosition.y > playerYLimit
    ) {
        updateDartToCursor(currentDart);
    } else if(
        currentDart &&
        !isDartFlying &&
        cursorPosition.y < playerYLimit
    ) {
        isDartFlying = true;
    }
});

toyCanvas.addEventListener('mousedown', function () {
    if(
        dartsRemaining &&
        cursorPosition.y > playerYLimit
    ) {
        currentDart = {
            x: 0,
            y: 0,
            angle: 0,
        };
        updateDartToCursor(currentDart);
        dartsRemaining--;
    }
});

toyCanvas.addEventListener('mouseup', function () {
    if(cursorPosition.y > playerYLimit) {
        console.log("relativeMotionVector", relativeMotionVector);
        isDartFlying = true;
    }
    if(isGameOver) {
        resetGame();
    }
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

var isDartOffScreen = function(dart) {
    return (
        dart.x > toyCanvas.width ||
        dart.y > toyCanvas.height ||
        dart.x < 0 ||
        dart.y < 0
    );
};

var drawPlayerTable = function () {
    var tableHeight = toyCanvas.height - playerYLimit;
    context.fillStyle = '#1a6d07';
    context.fillRect(
        0,
        playerYLimit,
        toyCanvas.width,
        tableHeight
    );
    var dartYSpacing = tableHeight / dartsPerGame;
    var remainingDartPosition = {
        x: toyCanvas.width * (19 / 20),
        y: playerYLimit + (dartYSpacing / 2)
    };
    for(var dartIndex = 0; dartIndex < dartsRemaining; dartIndex++) {
        drawDart(
            remainingDartPosition,
            tau * -0.25
        );
        remainingDartPosition.y += dartYSpacing;
    }
};
var isGameOver = false;

var resetAfterDart = function() {
    isDartFlying = false;
    currentDart = null;
    if(dartsRemaining <= 0) {
        currentTarget = null;
        isGameOver = true;
    }
};

var isDartCollidingWithTarget = function(dart, target) {
    var distanceToTargetCenter = getLength(dart, target);
    return (distanceToTargetCenter < target.radius);
};

var animationLoop = function() {
    requestAnimationFrame(animationLoop);
    context.clearRect(
        0,
        0,
        toyCanvas.width,
        toyCanvas.height
    );
    playerYLimit = toyCanvas.height * (2 / 3);
    drawPlayerTable();
    if(currentTarget) {
        drawTarget(currentTarget);
    }
    if(currentDart) {
        drawDart(currentDart, currentDart.angle);
        if(isDartFlying) {
            var dartPositionPlusRelativeMotionVector = addPoints(currentDart, relativeMotionVector);
            currentDart.x = dartPositionPlusRelativeMotionVector.x;
            currentDart.y = dartPositionPlusRelativeMotionVector.y;
            if(isDartCollidingWithTarget(currentDart, currentTarget)) {
                score++;
                currentTarget = makeTarget();
                resetAfterDart();
            }
            if(isDartOffScreen(currentDart)) {
                resetAfterDart();
            }
        }
    }
    if(isGameOver) {
        drawGameOver();
    }
    drawScoreText();
};

requestAnimationFrame(animationLoop);
