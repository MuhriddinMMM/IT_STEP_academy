// console.log(2 + "2" + 0 + 1);
// console.log(+8);
// console.log(7 * "a");

// console.log(NaN === NaN);

// let promptNew = prompt("napishite chislo");
// console.log(!isNaN(+promptNew));

// while (!isNaN(+promptNew)) {
//   promptNew = prompt("napishite chislo");
// }
// let promptNew;
// do {
//    promptNew = prompt("napishite chislo");
// } while (!isNaN(+promptNew));
// let num = 0;
// do {
//   console.log(Math.pow(2, num));
//   num++;
// } while (num <= 10);
// outer:for(let i =2; i<=200;i++){
//     inner:for(let j=2;j<i;j++){

//     }
// }

function showPrimes(n) {
  numsIterator: for (let i = 2; i <= 200; i++) {
    checkDivisors: for (let j = 2; j < i; j++) {
      if (i % j === 0) continue numsIterator;
    }
    console.log(i);
  }
}
showPrimes(200);
