var myForm = document.forms.myForm;
var login = myForm.elements.login;
var password = myForm.elements.password;
var send = myForm.elements.send;
var result = document.getElementById('result');

send.onclick = function(){
    var request = new XMLHttpRequest();
    var body = "login=" + encodeURIComponent(login.value) + "&password=" + encodeURIComponent(password.value);
    request.open('POST', 'data.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200){
            result.innerHTML = request.responseText;
            console.log(request.responseText);
        }
    };
    request.send(body);
    return false;
}


