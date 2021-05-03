// Задание № 1

// Сделайте функцию, которая считает и выводит количество своих вызовов.

// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4

// function func() {
//     let count = 0;

//     count++;

//     return count;
// }

// console.log(func())
// console.log(func())
// console.log(func())
// console.log(func())



// function welcome(wel) {
//     function say(str) {
//         console.log(wel + " " + str);
//     }

//     return say;
// }
// // 1000 - Male
// // 1000 - Female
// let mr = welcome("Mr");
// // console.log(typeof mr);
// mr("Smith");
// mr("Jack");
// mr("Tom");


// function test() {
//     console.log("Function 1");


//     return func;
// }
// let func2 = function func() {
//     console.log("Function 2");
// };

// func2();
// func2();
// func2();
// func2();

// Регулярные выражения

// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'. 

// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'


// console.log("aas qwe".match(/\w{3}$/))

// Дан инпут. Введите в него город, например, Минск. Сохраните его в куки. Зайдя на другую страницу сайта вы должны увидеть фразу 'ваш город - Минск'
// document.cookie = "student=shamsidin";
// document.cookie = "student2=shamsidin";
// console.log(document.cookie.split("=")[1]);

// Пусть по заходу на страницу показывается определенный рекламный текст. Рядом с ним сделайте кнопку 'убрать', по нажатию на которую этот рекламный текст не показывается этому пользователю ровно 10 секунд.

let text = document.querySelector("p");
let btn = document.querySelector("button");

btn.onclick = () => {
    text.style.display = "none";

    document.cookie = `konstantin=${text.textContent};max-age=10`;

    setTimeout(() => {
        text.style.display = "block";
    }, 10000)

}


window.onload = () => {
    if (document.cookie == "")
        text.style.display = "block";
    else {
        text.style.display = "none";
        setTimeout(() => {
            text.style.display = "block";
        }, 10000)
    }
}





// Реализуйте календарик сдедующего вида: показаны дни текущего месяца (в ряд), слева стрелка 'предыдущий месяц', справа ссылка 'следующий месяц'. Сверху показан год и месяц, который мы смотрим. Если мы смотрим текущий месяц текущего года - текущий день должен быть как-то выделен.

let date = new Date(); // Месяц 4

date.setMonth(date.getMonth() + 1)  // Месяц стал 5
date.setDate(1); // День стал 1, пятного месяца
date.setDate(date.getDate() - 1) // Месяц стал 4 и последний день этого месяца

console.log(date);