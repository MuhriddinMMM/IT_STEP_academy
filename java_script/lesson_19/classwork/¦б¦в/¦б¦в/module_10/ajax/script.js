var connect = document.forms.connect;
var result = document.getElementById('result');

connect.elements.submit.onclick = function(){
    var request = new XMLHttpRequest();
    //var params = 'name=' + encodeURIComponent(connect.elements.name.value) + '&surname=' + encodeURIComponent(connect.elements.surname.value);
    var params = JSON.stringify({
        name: connect.elements.name.value,
        surname: connect.elements.surname.value,
    });
    console.log(params);
    request.open('POST', 'ajax.php', true);
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            result.innerHTML = request.responseText;
        }
    }
    request.send(params);
    return false;
}