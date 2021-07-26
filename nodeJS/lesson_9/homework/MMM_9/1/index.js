var elem = document.getElementById("elem");
console.log(elem.value);

function func() {
  alert(this.value);
}
func.call(elem);
