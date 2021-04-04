let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("repeat");

let btn = document.querySelector("button");
console.log(password2);

document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
};

btn.addEventListener("click",
    function () {
        console.log(password2);
        if (false
            //|| String(email.value).match("[a-zA-Z][\\w]+@[a-z]{2,4}.[a-z]{2,}") == null
        ) {
            document.querySelector(".disEmail").style.display = "inline-block";
            return;
        }
        else
            document.querySelector(".disEmail").style.display = "none";

        if (false
            // password.value != password2.value 
            //|| String(password.value).match("[\\w]{6,}") == null
        ) {
            document.querySelector(".dis").style.display = "inline-block";
            return;
        }
        else
            document.querySelector(".dis").style.display = "none";


        document.cookie = `User=${email.value}`

        window.location.href = "welcome.html"


    });