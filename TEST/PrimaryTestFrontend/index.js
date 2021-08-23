// a - b натуральные числа, включая ноль

// function multi(a, b) {
//   if (a > 0 && b > 0) {
//     if (a == 1) return b;
//     else if (b == 1) return a;
//     else {
//       return a + multi(a, b - 1);
//     }
//   } else return 0;
// }
// console.log(multi(5, 5));

// function multi(a, b) {
//   if (a = 0 && b > 0) {
//     if (a == 1) return b;
//     else if (b == 1) return a;
//     else {
//       return a + multi(a, b - 1);
//     }
//   } else return 0;
// }
// console.log(multi(5, 5));

// function sum(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return sum(n - 1) + n;
//   }
// }
// console.log(sum(4));

// function sign(n) {
//   if (n > 0) return 1;
//   else return -1;
// }
// console.log(sign(-5));

// var ballons = 100;
// ballons *= 2;
// console.log(ballons);

// ballons /= 4;
// console.log(ballons);

// var asus = "MacbookPro";
// console.log(asus[0]);
// console.log(asus.slice(1));

// var age = 11;
// var accompanied = true;
// var restriction = 12;

// console.log(restriction <= age || accompanied);
// var array1 = [1, 2, 3, 4];
// var array2 = [5, 6, 7, 8];
// var array3 = [9, 10, 11, 12];
// array1 = array1.concat(array2, array3);
// console.log(array1);

// console.log(Math.floor(Math.random() * 4));

let input = "javascript is awesome";

let output = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] == "a") {
    output += "4";
  } else if (input[i] == "e") {
    output += "3";
  } else if (input[i] == "i") {
    output += "1";
  } else if (input[i] == "o") {
    output += "0";
  } else {
    output += input[i];
  }
}

console.log(output);
