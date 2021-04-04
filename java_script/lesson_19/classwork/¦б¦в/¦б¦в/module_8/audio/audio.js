var player = document.getElementById('player');
var btnPlay = document.getElementById('btnPlay');
var btnPause = document.getElementById('btnPause');
var btnStop = document.getElementById('btnStop');
var btnVolumePlus = document.getElementById('btnVolumePlus');
var btnVolumeMinus = document.getElementById('btnVolumeMinus');

btnPlay.onclick = function () {
    player.play();
};

btnPause.onclick = function () {
    player.pause();
};

btnStop.onclick = function () {
    player.currentTime = 0;
    player.pause();
};

btnVolumePlus.onclick = function () {
    player.volume += 0.1;
};

btnVolumeMinus.onclick = function () {
    player.volume -= 0.1;
};