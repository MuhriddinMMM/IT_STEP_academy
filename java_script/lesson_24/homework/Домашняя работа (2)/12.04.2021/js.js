// =========== Домашняя работа по слайдеру ===========

// let photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
// let btn = document.querySelector(".next");
// let photo = document.querySelector("#photo");

// let index = 0;

// btn.onclick = () => {
//     if (index === photos.length - 1)
//         index = -1;

//     photo.src = photos[++index];

// };

// =========== Классы ===========


class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setGender(value) {
        this.gender = value;
    }

    printPerson() {
        console.log(`Имя: ${this.name}, возвраст: ${this.age}`)
    }

    gender = "X";
}

let jack = new Person("Jack", 22);
let mike = new Person("Michael", 27);

// // mike.printPerson()
// mike.setGender("Male")
// console.log(mike.gender);
// // console.log(jack);

// for(создание переменных;условие;иттерация)
class MyString {
    reverse(text) { //super
        //return str.split('').reverse().join("");
        let str = [];

        for (let letter of text) {
            str.push(letter);
        }

        for (let i = 0, j = str.length - 1; Math.floor(i < str.length / 2); i++, j--) {
            let temp = str[i];
            str[i] = str[j];
            str[j] = temp;
        }

        //str === ['r', 'e', 'p','u','s']

        let strJoin = "";

        for (let letter of str) {
            strJoin += letter
        }

        // strJoin === repus

        return strJoin;
    }
}

let myString = new MyString();

// console.log(myString.reverse("dragon"));



let str = "test test2 test3";

let words = str.split(" "); // [test, test2, test3] - 3

// str.split(" ").forEach(item => item[0].toUpperCase() + item.slice(1));

//isDate('qweqwqe') // false
//isDate('12.20.2020') // true
for (let i = 0; i < words.length; i++)
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);


str = words.join(" ")

// console.log(str);


// let array2 = [
//     [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(array2);

// console.log(array2[0][2][2]);

// let array = [
//     "text",
//     "text2",
//     "text3"
// ];

// console.log(array[1][3]);


//11.11.1111
function isDate(str) {

    // if (str.length > 10)
    //     return false;

    // if (str[0] >= '0' && str[0] <= '9' && str[1] >= '0' && str[1] <= '9'
    //     && str[2] == '.'
    //     && str[3] >= '0' && str[3] <= '9' && str[4] >= '0' && str[4] <= '9'
    //     && str[5] == '.'
    //     && str[6] >= '0' && str[6] <= '9' && str[7] >= '0' && str[7] <= '9'
    //     && str[8] >= '0' && str[8] <= '9' && str[9] >= '0' && str[9] <= '9')
    //     return true;
    // else
    //     return false;

    if (str.match('^\\d{2}\\.\\d{2}\\.\\d{4}$'))
        return true;

    return false;
}

// console.log(isDate("10.11.1001"));


// [a-zA-Z0-9] === \\w
// [^0-9] === \\D
// {начало, конец}
// {начало, }
// {const}
//Email
function regEx(str) {

    if (str.match("^[\\w\.]{3,}@[a-zA-Z]{2,6}\.[a-zA-Z]{2,5}$")) {

        return true

    }


    return false;
}


// console.log(regEx("gmaildilavar@gmail.com"))

function power(num) {

    function result(num2) {
        return num ** num2;
    }

    return result;
}

let workWith2 = power(2);

// console.log(workWith2(1))
// console.log(workWith2(2))
// console.log(workWith2(3))
// console.log(workWith2(4))
// console.log(workWith2(5))


let workWith3 = power(3);

// console.log(workWith3(1))
// console.log(workWith3(2))
// console.log(workWith3(3))
// console.log(workWith3(4))
// console.log(workWith3(5))

let workWith5 = power(5);

// console.log(workWith5(1))
// console.log(workWith5(2))
// console.log(workWith5(3))
// console.log(workWith5(4))
// console.log(workWith5(5))

function welcome(word) {
    function saySmth(name, surname) {
        return word + ", " + name + " " + surname;
    }

    return saySmth;
}

let forMale = welcome("Mr");

// console.log(forMale("John Smith"));
// console.log(forMale("Steve Smith"));

let forFemale = welcome("Mrs");


// console.log(forFemale("Alice", "Smith"));
// console.log(forFemale("Martha", "Smith"));
