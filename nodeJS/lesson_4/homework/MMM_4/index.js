const isEven = (num) => num % 2 == 0;

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

const showDevisors = (num) => {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
};

const identifyDevisors = (num) => {
  let arrDevisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      arrDevisors.push(i);
    }
  }
  return arrDevisors;
};

console.log(isEven(10));
console.log(showDevisors(5));
console.log(identifyDevisors(24));
