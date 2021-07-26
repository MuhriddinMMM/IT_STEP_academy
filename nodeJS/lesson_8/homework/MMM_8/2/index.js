let points = [40, 100, -5, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("demo").innerHTML = points;
}
