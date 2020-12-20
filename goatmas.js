var present = document.getElementById('gift');
var buttonBox = document.getElementById('giftclickit');
var button = document.getElementById('click-button');
button.addEventListener('click', function () {
    present.innerHTML = '<h1>Happy Holidays!</h1>';
    buttonBox.innerHTML = '';

});
