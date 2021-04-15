// // Spread и Rest

// // Итератор и генератор
// function sum(a, b) {

//     let arr = [...arguments]

//     arr.push(100);
//     console.log(arr);
//     // for (let num of nums)
//     //     result += num;

//     return 0
// }

// // console.log(sum(1, 2, 3, 4, 5, 10, 15));


// // let array = [1, 2, 3, 4, 5];
// // let array2 = [10, 15, 20, 25]

// // let arr = [...array, ...array2]

// // console.log(arr);



// // function* print(num) {
// //     yield nums;
// // }

// // for (let i = 1; i < 6; i++) {
// //     let connection = print(i)
// //     alert(connection.next().value)
// // }


// // for (let i = 1; i < 6; i++)
// // alert(print(i).next().value)



// // function* test() {
// //     yield "H";
// //     yield "e";
// //     yield "l";
// //     yield "l";
// //     yield "o";
// // };


// // let test2 = test();
// // let letter = ''
// // while (letter.length != 5) {
// //     letter += test2.next().value;
// //     console.log(letter);
// // }

// // console.log("Все данные успешно прошли от сервера");
// // console.log(letter);

// function test3() {
//     for (let i = 0; i < 10000; i++)
//         for (let j = 0; j < 100; j++)
//             console.log(1);
// }


// console.log("Начало");

// setTimeout(test3, 1000);

// console.log("Конец");



// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.onload = () => {
//     console.log(xhr.response);
// }
// xhr.send();

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

const api = "http://api.weatherstack.com/current?access_key=ce0ada04297ba7ee10b37105189c6e56&query=Washington&forecast_days=5"

let xhr = new XMLHttpRequest();

xhr.open("GET", api);

xhr.onload = () => {
    document.getElementsByTagName("img")[0].src = JSON.parse(xhr.response).current.weather_icons[0]
    console.log(JSON.parse(xhr.response).current.weather_icons);
}

xhr.send();