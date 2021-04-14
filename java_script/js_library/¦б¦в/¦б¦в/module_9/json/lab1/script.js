var myForm = document.getElementById('myForm');
var email = myForm.elements.email;
var pass = myForm.elements.pass;
var btn = document.getElementById('btn');
var fG = document.getElementsByClassName('form-group')[0];

email.oninput = function(){
    var emailValue = email.value;
    connect(emailValue);
}
pass.oninput = function(){
    checkInput();
}
btn.onclick = function(){
    alert('Спасибо за регистрацию!');
    return false;
}

function connect(email){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            var parse = JSON.parse(request.responseText);
            for(var i = 0; i < parse.length; i++){
                for(key in parse[i]){
                    if(parse[i][key] == email){
                        fG.classList.add('has-error');
                        checkInput();
                        return false;
                    }else{
                        fG.classList.remove('has-error');
                    }
                }
            }
            checkInput();
        }
    }
    request.open('GET', 'data.json', true);
    request.send();
}

function checkInput(){
    if(pass.value != '' && email.value != '' && !fG.classList.contains('has-error')){
        btn.removeAttribute('disabled');
    }else{
        btn.setAttribute('disabled', true);
    }
}