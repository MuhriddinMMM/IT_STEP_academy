// // ======= Сравнение append и appendChild =======

// // //append - (String || HtmlTag) => undefined | можно добавлять сразу много элементов
// // //appendChild - (HtmlTag) => HtmlTag        | только один элемент

// // let t = document.createElement("h1");
// // t.textContent = "Hi"
// // let header = document.body.appendChild(t)




// // console.log(header);

// // ======= Работа с XmlHTTPRequest =======

// let xhr = new XMLHttpRequest();


// // xhr.onreadystatechange = () => {
// //     alert("Сработал")
// // }
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");


// // xhr.onerror = function () {
// //     alert("Ошибка")
// // }



// xhr.onload = function () {

//     // console.log(xhr.response);
//     console.log(xhr.getAllResponseHeaders());

//     // for (let i = 0; i < objectsArray.length; i++) {
//     //     let block = document.createElement("div");

//     //     let nameHeader = document.createElement("h2");
//     //     nameHeader.innerHTML = objectsArray[i].id;

//     //     let titleP = document.createElement("p")
//     //     titleP.innerHTML = objectsArray[i].title;

//     //     let bodyP = document.createElement("p");
//     //     bodyP.innerHTML = objectsArray[i].body;

//     //     block.append(nameHeader, titleP, bodyP);

//     //     document.body.append(block, "=====================");
//     // }

//     // if (xhr.status >= 400) {
//     //     alert("Ошибка")
//     // } else if (xhr.readyState == 4) {
//     //     alert("Все хорошо")
//     // }

// }

// xhr.send();




// console.log("Раз");
// console.log("Два");

// setTimeout(() => {
//     console.log("Четыре");
// }, 0)

// console.log("Три");


// ========== Задание ==========

document.body.style.backgroundColor = "wheat"


let xhr = new XMLHttpRequest()

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function () {

    let users = JSON.parse(xhr.response);
    let blocks = document.querySelector(".blocks")

    for (let i = 0; i < users.length; i++) {
        let block = document.createElement("div");
        block.className = "block";

        let info = document.createElement("p");
        info.textContent = users[i].name;

        block.append(info);

        block.onclick = function () {
            let xhr2 = new XMLHttpRequest();
            let name = this.textContent

            xhr2.open("GET", `https://jsonplaceholder.typicode.com/users?name=${name}`);

            xhr2.onload = function () {
                let myUser = JSON.parse(xhr2.response);
                console.log(myUser);
                let table = `
                 <table> 
                    <tr>
                         <td>Id</td>
                         <td>${myUser[0].id}</td>
                     </tr>
                     <tr>
                         <td>Name</td>
                         <td>${myUser[0].name}</td>
                     </tr>
                     <tr>
                         <td>Username</td>
                         <td>${myUser[0].username}</td>
                     </tr>
                     <tr>
                         <td>Address</td>
                         <td>${myUser[0].address.street}</td>
                     </tr>
                     <tr>
                         <td>Email</td>
                         <td>${myUser[0].email}</td>
                     </tr>
                     <tr>
                         <td>Phone</td>
                         <td>${myUser[0].phone}</td>
                     </tr>
                     <tr>
                        <td>Website</td>
                     <td>${myUser[0].website}</td>
                 </tr>
             </table>
             `
                let testTable = document.createElement("div")
                testTable.innerHTML = table;



                let xhr3 = new XMLHttpRequest();

                xhr3.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${myUser[0].id}`)

                xhr3.onload = function () {

                    let posts = JSON.parse(xhr3.response);
                    console.log(posts);
                    for (let i = 0; i < posts.length; i++) {
                        let testDiv = document.createElement("div")

                        testDiv.innerHTML = `${posts[i].title} = ${posts[i].body}<br><hr><br>`

                        document.body.append(testDiv);
                    }
                }

                xhr3.send();
                document.body.append(testTable)

            }

            xhr2.send();
        }

        blocks.append(block);



    }

    //Способ № 1
    // let userBlock = document.querySelectorAll(".block");

    // for (user of userBlock) {
    //     user.onclick = function () {

    //         let xhr2 = new XMLHttpRequest();
    //         let name = this.textContent

    //         xhr2.open("GET", `https://jsonplaceholder.typicode.com/users`);

    //         xhr2.onload = function () {



    //             let users = JSON.parse(xhr.response);
    //             let myUser = null;

    //             for (user of users)
    //                 if (user.name == name)
    //                     myUser = user




    //             console.log(myUser);
    //             let table = `
    //             <table> 
    //                 <tr>
    //                     <td>Name</td>
    //                     <td>${myUser.name}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Username</td>
    //                     <td>${myUser.username}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Address</td>
    //                     <td>${myUser.address.street}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Email</td>
    //                     <td>${myUser.email}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Phone</td>
    //                     <td>${myUser.phone}</td>
    //                 </tr>
    //                 <tr>
    //                     <td>Website</td>
    //                     <td>${myUser.website}</td>
    //                 </tr>
    //             </table>
    //             `
    //             let testTable = document.createElement("div")
    //             testTable.innerHTML = table;

    //             document.body.append(testTable)
    //         }
    //         xhr2.send();
    //     }


    // }

}

xhr.send();
