var layers = [
    document.getElementById('layer1'),
    document.getElementById('layer2'),
    document.getElementById('layer3'),
    document.getElementById('layer4')
];

var startButton = document.getElementById('start-button');
startButton.addEventListener('click', function () {
    layers.forEach(function (layer) {
        layer.loop = true;
        layer.play();
    })
})

var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', function () {
    layers.forEach(function (layer) {
        layer.pause();
    })
})

document.body.addEventListener('click', function(event) {
    var targetLayer = event.target.dataset.layer;
    console.log('targetLayer', targetLayer, typeof targetLayer);
    if (targetLayer !== undefined) {
        var layerIndex = parseInt(targetLayer, 10);
        var layer = layers[layerIndex];
        console.log('layer', layer);
        var isOn = layer.volume;
        if (isOn) {
            layer.volume = 0;
            event.target.classList.add('silenced');
        } else {
            layer.volume = 1;
            event.target.classList.remove('silenced');
        }
    }
})
