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
        y: (Math.sin(angle) * wiggle.radius) + wiggle.y,
    }
}
var animationLoop = function(time) {
    var numberOfSecondsSincePageLoad = time / 1000;
    requestAnimationFrame(animationLoop);
    context.clearRect(
        0,
        0,
        toyCanvas.width,
        toyCanvas.height
    );
    var wiggle = {
        speed: 1,
        phase: 0,
        radius: 55,
        x: toyCanvas.width / 2,
        y: toyCanvas.height / 2
    };
    var wiggleBlue = {
        speed: 2,
        phase: 1,
        radius: 45,
        x: toyCanvas.width / 4,
        y: toyCanvas.height / 2
    };
    var greenRectCoords = getCoordinatesFromWiggle(wiggle, numberOfSecondsSincePageLoad);
    var blueRectCoords = getCoordinatesFromWiggle(wiggleBlue, numberOfSecondsSincePageLoad);
    context.fillStyle = 'green';
    context.fillRect(
        greenRectCoords.x,
        greenRectCoords.y,
        150,
        100
    );
    context.fillStyle = 'blue';
    context.fillRect(
        blueRectCoords.x,
        blueRectCoords.y,
        111,
        95
    );
}

requestAnimationFrame(animationLoop);
