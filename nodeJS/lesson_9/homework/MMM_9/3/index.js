var elem = document.getElementById("elem");

function func(surname, name) {
  alert(this.value + ", " + surname + " " + name);
}

func.apply(elem, ["avaz", "khayitov"]); //тут должно вывести 'привет, Иванов Иван'
