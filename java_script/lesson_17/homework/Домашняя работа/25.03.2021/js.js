let Student = {
    name: "Mike",
    age: 23,

    // print: () => {
    //     alert(`Студент с именем ${this.name} и ему ${this.age} лет`)
    // }
}

// let array = [1, 2, 3, 4, 5, 6, 7, 9, 10]

// for(let i = 0;i < array.length;i += 2)
    
let num = 4;
// ++
//Постфиксный
// num2 = num
// num = num + 1;
// Префиксный 
// num2 = (num + 1)
// ++num

// let num2 = --num;

// alert(num);
// alert(num2);


// document.getElementById("название")
// document.getElementsByClassName("название")
// document.getElementsByTagName("название")

// document.querySelectorAll(".test")


// function sum(num, num2){
//     let result = num + num2;

//     return result
// }

// let firstNum = prompt("Введите число");
// let secondNum = prompt("Введите второе число")

// alert(sum(firstNum, secondNum))

// let age = +prompt("Введите возраст")
// && - И
// || - ИЛИ
// ! - НЕ

// if(age > 18 && age < 25)
//     alert("Подросток")
// else if(age > 25)
//     alert("Взрослый")
// else
//     alert("Ребенок")

// условие ? действие1 : условие ? действие 2 : действие 3


// alert((age > 18 && age < 25) ? "Подросток" : "Ребенок")

// function max(num, num2){
        
//     if(num > num2)
//         return true;
//     else if(num < num2)
//         return false;
//     else
//         return true

// }

// alert(max(15, 10))

// max(1, 2)
// max(3, 2)
// max(1, 4) 

// let str = "Привет всем@"

// for(let i = 0;i < str.length;i++){
//     if(str[i] === '@')
//         alert("Есть")
//     console.log(str[i]);
// }

// let str = "Привет всем@"

// for(let i of str){
//     console.log(i);
// }

// let str = "Привет всем как вы ребята"

// alert(str.indexOf("как!"))


// alert(Math.ceil(Math.random() * 10))
// alert(Math.pow(3, 2))

// function hi(){
//     alert("Привет")
// }

// setTimeout(hi, 1500);


// let seconds = 60;

// let id = setInterval(() => {
//     document.body.innerHTML = seconds--;
// }, 0.00000001);

let str = "@test@da.eqw"

if(str.match("^\\w+@\\w+\\.\\w+$") != null)
    alert("Можно")
else
    alert("Нельзя")
// let count = 0;

// for(symbol of str){
//     if(symbol === ' ')
//         count++;
// }

// count++;


// alert(`В этой строке ${str.split(" ").length} слов`)


// let array = str.split(" ");

// for(element of array)
//     console.log(element);
// for(let i = 0;i < str.length;i++){
//     console.log(str.charAt(25));
// }

//  function print(){
//     alert(`Студент с именем ${this.name} и ему ${this.age} лет`)
//  }

// print.call(Student)

//  let object2 = {
//      name: "Tom",
//     age: 23,
   
//  }

// function print() {
//     alert(this.name);
// }

// print.call(object2);




// let student = {
//     name: "Alex",
//     age: 30,
//     job: "Worker",
//     language: ["English", "Russian", "Uzbek"]
// }

// let objToJSON = JSON.stringify(student);
// let jsonToObj = JSON.parse('{"name":"Alex","age":30,"job":"Worker","language":["English","Russian","Uzbek"]}')


// console.log(jsonToObj)

// try{

// }catch(){

// }
// finally{

    // Разрыв соедения

// }

// let leftText = document.getElementById("JsonText");
// let rightText = document.getElementById("pretty__json")
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let obj
//     try{
//         obj = JSON.parse(leftText.value);
//     }catch(err){
//         alert("Catch")
//     }
//     finally{
//         alert("Finally")
//     }
//     let result = JSON.stringify(obj, null, 4)

//     rightText.value = result
// })












