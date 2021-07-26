var elem = document.getElementById("elem");

function func(surname, name) {
  alert(this.value + ", " + surname + " " + name);
}

func.call(elem, "shamsiddin", "shukurov"); //тут должно вывести 'привет, Иванов Иван'
