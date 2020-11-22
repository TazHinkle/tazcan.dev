// Going for a swaying grass aesthetic.  These were inspirational:
// https://dribbble.com/shots/11444046-Quarantine-in-Spring
// https://dribbble.com/shots/10947490-Countryside-landscape
// https://dribbble.com/shots/11096994-Virtual-Garden
var toyCanvas = document.getElementById('toy1-canvas');
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
var getCoordinatesFromWiggle = function(wiggle, time) {
    var angle = tau * wiggle.speed * (time + wiggle.phase);
    return {
        x: (Math.cos(angle) * wiggle.radius) + wiggle.x,
        y: (Math.sin(angle) * wiggle.radius) + wiggle.y
    }
}

var getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max - 1)) + 1;
}

var generateWiggle = function(x, y) {
    return {
        speed: getRandomInt(2),
        phase: Math.random(),
        radius: 4 + getRandomInt(4),
        x: x,
        y: y,
        strokeStyle: `hsl(${60 + (Math.random() * 60)}, 80%, 20%)`,
        fillStyle: `hsl(${60 + (Math.random() * 60)}, 90%, 30%)`,
        height: (Math.random() * 50) + 50
    };
};

var wiggles = [
    generateWiggle(240, 380),
    generateWiggle(260, 380),
    generateWiggle(280, 380),
    generateWiggle(300, 380)
];

toyCanvas.addEventListener('mousemove', function (event) {
    wiggles.push(generateWiggle(event.offsetX, event.offsetY));
});

var drawGrassBlade = function(wiggle, time) {
    var grassBladeLength = wiggle.height;
    var grass = getCoordinatesFromWiggle(wiggle, time);
    context.beginPath();
    context.moveTo(wiggle.x, wiggle.y);
    context.lineTo(grass.x, wiggle.y - (grassBladeLength / 2));
    context.lineTo(grass.x, wiggle.y - grassBladeLength);
    context.strokeStyle = wiggle.strokeStyle;
    context.fillStyle = wiggle.fillStyle;
    context.stroke();
    context.fill();
};

var animationLoop = function(time) {
    var numberOfSecondsSincePageLoad = time / 1000;
    requestAnimationFrame(animationLoop);
    context.clearRect(
        0,
        0,
        toyCanvas.width,
        toyCanvas.height
    );

    wiggles.forEach(function(wiggle) {
        drawGrassBlade(wiggle, numberOfSecondsSincePageLoad);
    });
}

requestAnimationFrame(animationLoop);
