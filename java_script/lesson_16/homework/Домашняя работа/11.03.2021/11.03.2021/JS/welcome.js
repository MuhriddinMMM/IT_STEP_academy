if (document.cookie == "" || document.cookie.split("=")[1] == "")
    window.location.href = "index.html"

document.getElementById("userWelcome").textContent = document.cookie.split("=")[1]

document.getElementById("exitRef").onclick = function () {
    document.cookie = "User="
}