// let reg = new RegExp();

// console.log(reg);




// let text = "Abdullayov";

// if (text.match(/['a-zA-Z]+ev$/)) {
//     console.log("Нашел");
// } else {
//     console.log("Не нашел");
// }


// let phone = "998973331122";

// ? - 0 или 1
// + - 1 или более
// * - 0 или более
// {n} - n раз
// {n,} - n раз и более
// {n, m} - от n до m
// ^ - в начале строки
// $ - в конце строки
// . - любой символ
// [] - одно из них

// console.log(phone.match(/^[\+#]?[0-9]{12}$/));

// if (phone.match(/^[\+]?[0-9]{12}$/)) {
//     console.log("Нашел");
// } else {
//     console.log("Не нашел");
// }

// let email = "isroil@gmail....com"

// console.log(email.match(/^\w{3,}@[a-zA-Z\.]{2,8}\.\w{2,5}$/));

// if (email.match(/^\w{3,}@[a-zA-Z\.]{2,8}\.\w{2,5}$/)) {
//     console.log("Нашел");
// } else {
//     console.log("Не нашел");
// }

// [abcdef]

// if(str.match(/a/)){

// }


// function domainName("http://github.com/carbonfive/raygun")
// 

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


// document.querySelector("p").onclick = function (e) {
//     if (e.ctrlKey)
//         this.style.backgroundColor = "red"
//     else if (e.shiftKey)
//         this.style.backgroundColor = "green"
// }




let firstName = document.querySelector(".Firstname");
let LastName = document.querySelector(".LastName");
let Age = document.querySelector(".Age");
let Company = document.querySelector(".Company");


let obj = []

for (let i = 0; i < document.querySelectorAll(".Firstname__main").length; i++) {
    let temp = {
        firstname: document.querySelectorAll(".Firstname__main")[i].textContent,
        lastname: document.querySelectorAll(".Lastname__main")[i].textContent,
        age: +document.querySelectorAll(".Age__main")[i].textContent,
        company: document.querySelectorAll(".Company__main")[i].textContent,
    }

    obj.push(temp);
}



// console.log(obj);

// console.log(obj.sort((el1, el2) => {
//     if (el1.age > el2.age) {
//         return 1;
//     } else if (el1.age < el2.age) {
//         return -1;
//     }
//     else {
//         return 0;
//     }
// }));
