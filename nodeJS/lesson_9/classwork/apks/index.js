// function test() {
//   console.log(this);
// }
// global.test()
// window.test() = function(){
//     //...
// }
// console.log(window);
// const test1 = function (){
//     console.log(this);
// }
// test1()

// const test2 = () => {
//   console.log(this);
// };
// test2();

// let counter = 0;
// function f1(e) {
//     counter++;
//   this.textContent = counter;

// }
// function f2(e) {
//      counter--;
//   this.textContent = counter;

// }
// document.querySelector(".btn-1").addEventListener("click", () => {
//   f1.call(document.querySelector(".div-1"));
// });

// document.querySelector(".btn-2").addEventListener("click", () => {
//   f2.call(document.querySelector(".div-1"));
// });

// document.querySelector(".btn-1").addEventListener("click", f1);

// document.querySelector(".btn-2").addEventListener("click", () => {
//   f1.call(document.querySelector(".btn-1"));
// });

// f1.call(document.querySelector(".btn-1"));
// f1.call(document.querySelector(".btn-1"));
// const btn2 = document.querySelector(".btn-2");
// btn2.addEventListener("click", function () {
//   this.textContent = counter;
//   counter++;
// });

// let counter = 0;
// function increment(ctr) {
//   ctr++;
//   this.textContent = ctr;
//   return ctr;
// }
// function decrement(ctr) {
//   ctr--;
//   this.textContent = ctr;
//   return ctr;
// }
// const div = document.querySelector(".div-1");
// const inc =increment.bind(div)
// const dec =decrement.bind(div)

// document.querySelector(".btn-1").addEventListener("click", () => {
// //   counter = increment.call(div, counter);
// counter=inc(counter)
// });
// document.querySelector(".btn-2").addEventListener("click", () => {
//   counter = decrement.call(div, counter);
// });

// bind()
// call()
// apply()

const ladder = {
  count: 0,
  inc() {
      this.count++;
      return this
  },
  dec() {
    this.count--;
    return this
  },
};
console.log(ladder.inc().inc().inc());
