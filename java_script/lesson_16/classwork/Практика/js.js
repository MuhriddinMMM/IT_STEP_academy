let email = document.getElementById("email");

document.getElementsByTagName("button")[0].addEventListener('click', function(){
   if(email.value.match(["A-Z"]+["@"]))
})

// window.location.href= "welcome.html"