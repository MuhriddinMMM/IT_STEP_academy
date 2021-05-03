// class Animal {
//     _name = "Animal"



//     print2() {
//         console.log(this.name)
//     }
// }


// let animal = new Animal();

// console.log(animal._name);

// console.log(animal.name);

// animal.print2()


// class Dog extends Animal {

// }

// let obj = new Animal();

// let tom = new Dog();

// console.log(obj);

// const t = 30;

// console.log("Начало");

// try {
//     console.log("Без ошибки");
// } catch (e) {
//     console.log("С ошибкой");
// } finally {
//     console.log("Finally");

// }

// let array = [1, 2, 3, 4, 5]

// if (5 in array) {
//     console.log("Есть");
// } else {
//     console.log("Нет");
// }


// let num1 = 1;

// let num2 = 0;

// try {
//     console.log(num1 / num2);
// } catch (e) {
//     console.log(e);
// }


// var obj = {
//     get value() {
//         return this.value;
//     },
//     set value(val) {
//         this._value = val;
//     }
// }

// obj = 5;

// console.dir(obj);


// let text = document.querySelector("p");
// // let blocks = document.querySelectorAll(".block");

// text.ondrag = () => {

// }

// let blocks = document.querySelectorAll(".block");

// let newBlock = document.createElement("div");

// newBlock.className = "block";

// blocks[0].insertAdjacentElement("beforebegin", newBlock)


// blocks.forEach(block => {

//     block.ondrop = () => {
//         block.append(text)
//     }

//     block.ondragover = (e) => {
//         e.preventDefault();
//     }
// })

// Заказ

// Постановка
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

// let text = "Анна"
// let right = true;

// let text2 = text.toLocaleLowerCase();

// console.log(text2);

// for (let i = 0, j = text2.length - 1; i < Math.floor(text2.length / 2); i++, j--) {
//     if (text2[i] !== text2[j])
//         right = false;

// }

// console.log(right);
// i =
// j = 


//  

// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// Пример
// Fizzbuzz(15)
// Результат
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz


// Поиск гласных

// Достаточно простая задача, которая часто попадается на собеседованиях.
// Постановка
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

// /
// %
// Hello === 2
// 5 / 2 = 2.5
// 5 % 2 = 1

// let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

// let text = "hellowaaattg"
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//         if (text[i] === vowels[j]) {
//             count++;
//         }
//     }
// }

// console.log(count);


// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// let num = Number(prompt())

// for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0)
//         console.log("fizzbuzz");
//     else if (i % 5 == 0)
//         console.log("buzz");
//     else if (i % 3 == 0)
//         console.log("fizz");
//     else
//         console.log(i);
// }




// Анаграмма
// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
//     Постановка
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

// friend, firend
// tom, mot
// mousem, ousemm





// let text = "qeqwywqeasd".split("")
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//     if (text[i].match(/[aeiouy]/))
//         count++;
// }
// console.log(count);






let word = "debit card";
let word2 = "bad cpedit";

let mapObj = new Map();
let mapObj2 = new Map();

let arrayLetters = word.split("").sort();
let arrayLetters2 = word2.split("").sort();


for (let i = 0; i < arrayLetters.length; i++) {
    if (mapObj.get(arrayLetters[i])) {
        mapObj.set(arrayLetters[i], mapObj.get(arrayLetters[i]) + 1)
    }
    else {
        mapObj.set(arrayLetters[i], 1);
    }
}

for (let i = 0; i < arrayLetters2.length; i++) {
    if (mapObj2.get(arrayLetters2[i])) {
        mapObj2.set(arrayLetters2[i], mapObj2.get(arrayLetters2[i]) + 1)
    }
    else {
        mapObj2.set(arrayLetters2[i], 1);
    }
}

console.log(mapObj2);
console.log(mapObj);

let result = false;

if (mapObj2.length != mapObj.length) {
    result = false;
} else {
    let keys = mapObj.keys();
    let keys2 = mapObj2.keys();
    let leng = mapObj2.size;

    console.log(keys);

    for (let [key, key2] of [keys, keys2]) {
        console.log(...key);
    }
    for (let i = 0; i < leng; i++) {
        if (keys[i] != keys2[i]) {
            result = false;
            break;
        }
        else {
            result = true;
        }
    }

}

console.log(result);
