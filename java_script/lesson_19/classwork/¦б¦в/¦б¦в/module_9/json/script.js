var div = document.getElementById('txtHint');
var request = new XMLHttpRequest();
var str = 'string';
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        document.getElementById("txtHint").innerHTML = request.responseText;
        //div.style.background = '#fff';
    }
};
request.onloadstart = function(){
    var img = document.createElement('img');
    img.setAttribute('id', 'img');
    img.src = '713.gif';
    div.appendChild(img);
}
request.addEventListener('onloadend', function(){
    var img = document.getElementById('img');
    console.log(img);
    div.removeChild(img);
    console.log(request.getAllResponseHeader);
});
request.open('GET', 'data.php?q=' + str, true);
request.send();

