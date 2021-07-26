
var elem = document.getElementById("elem");

function func(surname, name) {
  alert(this.value + ", " + surname + " " + name);
}

var newFunc = func.bind(elem);
//Тут напишите конструкцию с bind()

newFunc("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
newFunc("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'
