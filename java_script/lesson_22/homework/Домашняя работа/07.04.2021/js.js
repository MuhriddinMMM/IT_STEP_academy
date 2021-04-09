
let university = {
    facul: ["First", "Second"],
    courses: [1, 2, 3, 4],
    rector: "Isroil",
    name: "TUIT",
    student: {
        name: "Mike",
        age: 20
    },

    print: function () {
        alert(`Университет ${this.name}, ректор: ${this.rector}`)
    }
}

let { name: nameUniversity, rector, courses } = university;

// console.log(nameUniversity, rector, courses);

let country = ["Uzbekistan", "Russia", "USA", "Uzbekistan", "Russia", "USA", "France", "Japan"];

// let [uzb, , , , rus] = country;

// console.log(uzb, rus);

country.reverse();



let [first, second] = country;

console.log(first, second);

// let name = university.name;
// let rector = university.rector;
// let courses = university.courses;
// let student = {
//     name: "Alex",
//     age: 35
// }

// let { name, age = 20 } = student;

// let countries = ["Uzb", "Russian", "China"];

// let [elem1, elem2, elem3 = "USA"] = countries;

// console.log(elem1, elem2, elem3);


// Задание № 1
// Дан массив. Запишите первый элемент этого массива в переменную elem1, второй - в переменную elem2, третий - в переменную elem3, а все остальные элементы массива - в переменную arr.

// Задание № 2
// Дан массив. Запишите последний элемент этого массива в переменную elem1, а предпоследний - в переменную elem2. Показать решение.

// Задание № 3
// Дан массив. Запишите второй элемент этого массива в переменную elem2. Первый элемент никуда записывать не надо.

// Задание № 4
// Дан массив. Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3. Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо.

//Задание № 5
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}. Запишите соответствующие значения в переменные name, surname и age

//Задание № 6
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }. Запишите соответствующие значения в переменные name, surname и age. Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.


// let circles = document.querySelectorAll(".color")
// let colors = ["red", "yellow", "green"]
// let btn = document.querySelector("button")
// let index = -1;

// btn.addEventListener("click", () => {
//     if (index == -1 || index == 3)
//         index = 0;
//     else
//         circles[index++].style.backgroundColor = "";

//     circles[index].style.backgroundColor = colors[index];

// })

let input = document.querySelector("input");
input.onkeypress = (e) => {
    if (e.key.match("\\d"))
        e.preventDefault()
}