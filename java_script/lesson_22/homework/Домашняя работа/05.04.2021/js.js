// ===== Тернарный оператор =====

// let num = 10;


// if (num > 10)
//     console.log(`Число ${num} больше 10`);
// else
//     console.log(`Число ${num} меньше или равно 10`);

// (условие) ? действие1 : действие2

// num > 20 ? alert(`Правда`) : num === 15 ? alert("Равен") : alert("Ложь");


// ===== Стрелочные функции =====



// let student = {
//     name: "Jasur",
//     age: 22,
//     money: 1000,
//     // print: () => {
//     //     console.log(this);
//     // }
// }

// function print(symbol = '$') {
//     console.log(this.money + symbol);
// }

// Функция === Метод

// let newFunc = print.bind(student, ['sum']);

// newFunc()

// (function callSelf() {
//     console.log("Starting");
// })()


// let print = () => {
//     console.log("Before creating");
// }

// print();


// ===== Форматированные строки =====

// let num = 10;

// //Число: 10

// alert(`Число: ${num} ${num2} ${num3}`)

// ===== Деструктуризация =====

// let car = {
//     model: "Audi",
//     speed: 200,
//     weight: 3
// }

// let car2 = {
//     model: "BMW",
//     speed: 200,
// }

// let { model: Model, speed: Speed, weight = 5 } = car2

// // console.log(Model, Speed, weight);

// let array = []

// function giveMeTwoVariables() {
//     let num = 10;
//     let num2 = 15;

//     array.push(num, num2);

//     return array;
// }
// giveMeTwoVariables();
// let [num3, num4] = array;

// console.log(num3);
// console.log(num4);


// ===== Рекурсия =====

// let array = [1, 2, 3, 4, 5]
// let sum = 0;

// // for (let i = 0; i < array.length; i++)
// //     sum += array[i];


// function sumArray(arr, index) {

//     if (index == arr.length)
//         return 0;

//     return arr[index] + sumArray(arr, index + 1)
// }

//Вызов функции № 1: 1 + sumArray(arr, index + 1)
//Вызов функции № 2: 1 + 2 + sumArray(arr, index + 1)
//Вызов функции № 3: 1 + 2 + 3 + sumArray(arr, index + 1)
//Вызов функции № 4: 1 + 2 + 3 + 4 + sumArray(arr, index + 1)
//Вызов функции № 5: 1 + 2 + 3 + 4 + 5 + sumArray(arr, index + 1)
//Вызов функции № 6: 1 + 2 + 3 + 4 + 5 + 0

// sum = sumArray(array, 0)

// console.log(sum);

// 5! = 1 * 2 * 3 * 4 * 5 === 120

// function factorial(num) {
//     if (num === 1)
//         return 1;

//     return num * factorial(num - 1);
// }

// let result = factorial(5);

// console.log(result);

for (let i = 0; i < languages.length; i++) {
    if (languages[i].includes("p"))
        let list = document.createElement("li")
    list.textContent = languages[i]
}