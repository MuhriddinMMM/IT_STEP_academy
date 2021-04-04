var ball = document.getElementById('ball');

ball.onmousedown = function (e) {
    ball.style.position = 'absolute';

    var coords = getCoords(ball);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    moveAt(e);
    document.body.appendChild(ball);

    function moveAt(e) {
        /*ball.style.left = e.pageX - ball.offsetWidth / 2 + "px";
        ball.style.top = e.pageY - ball.offsetHeight / 2 + "px";*/
        ball.style.left = e.pageX - shiftX + 'px';
        ball.style.top = e.pageY - shiftY + 'px';

        console.log('left = ' + ball.style.left);
        console.log('top = ' + ball.style.top);
    }

    document.onmousemove = function (e) {
        moveAt(e);
    };

    ball.onmouseup = function () {
        document.onmousemove = null;
        ball.onmouseup = null;
    };

    console.log("pageX  = " + e.pageX + "| pageY = " + e.pageY);
    console.log("offsetWidth  = " + ball.offsetWidth + "| offsetHeight = " + ball.offsetHeight);
};

ball.ondragstart = function () {
    return false;
};

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}