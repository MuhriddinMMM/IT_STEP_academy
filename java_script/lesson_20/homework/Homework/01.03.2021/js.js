// let xhr = new XMLHttpRequest();

// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

// xhr.setRequestHeader("content-type", "application/json")

// xhr.addEventListener("load", function () {
//     console.log(xhr.response);
// })

// let obj = {
//     UserID: 2,
//     title: "Title",
//     body: "Body"
// }

// xhr.send(JSON.stringify(obj));


// ========================

// let btn = document.getElementById("btn");
// let block = document.querySelector(".block")
// btn.onclick = () => {
//     block.classList.toggle("active");
// }

// $("#btn").on("click", function () {
//     $(".block").toggleClass("active");
// })


$(".picture").on("mousemove", function (event) {

    $("menu").toggleClass("active")
    // $(".tom").css("left", `${event.clientX - 250}px`);
    // $(".tom").css("top", `${event.clientY - 50}px`);
})