// let xhr = new XMLHttpRequest();

// //Получение постов
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

// xhr.onload = () => {

//     let xhr = new XMLHttpRequest();

//     //Получение пользователей
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/user");

//     xhr.onload = () => {

//         let xhr = new XMLHttpRequest();

//         //Получение постов от наших пользователей
//         xhr.open("GET", "https://jsonplaceholder.typicode.com/user");

//         xhr.onload = () => {

//         }

//         xhr.send();
//     }

//     xhr.send();

// }

// xhr.send();


// let answer = confirm("Выберите да или нет");

// let promise = new Promise(
//     (resolve, reject) => {
//         if (answer)
//             resolve("Посты");
//         else
//             reject("Ошибка первого запроса");
//     }
// );

// promise
//     .then((data) => {

//         console.log(data);

//         answer = confirm("Выберите да или нет");

//         return new Promise((resolve, reject) => {
//             if (answer)
//                 resolve("Пользователи");
//             else
//                 reject("Ошибка второго запроса");
//         })
//     }
//     )
//     .then((user) => console.log(user))
//     .catch((error) => {
//         console.log(error);
//     })


// let answer = new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
//     xhr.responseType
//     xhr.onload = () => {
//         resolve(JSON.parse(xhr.response));
//     }

//     xhr.onerror = () => {
//         reject("Ошибка при получение постов");
//     }

//     xhr.send();
// })


// answer
//     .then(result => {
//         console.log(result);
//         console.log("=============");
//         let answer2 = new Promise((resolve, reject) => {

//             let xhr = new XMLHttpRequest();


//             xhr.open("GET", "https://jsonplaceholder.typicode.com/comments")

//             xhr.onload = () => {
//                 resolve(JSON.parse(xhr.response));

//             }

//             xhr.onerror = () => {
//                 reject("Ошибка при получение пользователей");
//             }

//             xhr.send();
//         })

//         return answer2

//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// let test = {
//     name: "T",
//     age: 20
// }

// fetch("https://jsonplaceholder.typicode.com/comments", {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(test)
// })
//     .then(data => {
//         return data.json();
//     })
//     .then(jsonData => {
//         console.log(jsonData);
//     })

let select = document.querySelector("#select");
let btn = document.getElementById("btn");

fetch("https://api.sampleapis.com/coffee/hot")
    .then(data => data.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {
            let option = document.createElement("option");

            option.value = data[i].title
            option.textContent = data[i].title;

            select.append(option)

            // select.innerHTML += `<option value="${data[i].title}">${data[i].title}</option>`
        }

    })

btn.onclick = () => {
    console.log(select.value);
}