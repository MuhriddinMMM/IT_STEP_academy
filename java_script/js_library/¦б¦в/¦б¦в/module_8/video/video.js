var video_dom = document.getElementById('video');
var canvas_draw;

video_dom.addEventListener('play', function() {
    video_dom.width = canvas_draw.width = video_dom.offsetWidth;
    video_dom.height = canvas_draw.height = video_dom.offsetHeight;
    var ctx_draw = canvas_draw.getContext('2d');
    draw_interval = setInterval(function() {
        // import the image from the video
        ctx_draw.drawImage(video_dom, 0, 0, video_dom.width, video_dom.height);
        // export the image from the canvas
        var img = new Image();
        img.src = canvas_draw.toDataURL('image/png');
        img.width = 40;
        frames.appendChild(img);
    }, 1500)
}, false);