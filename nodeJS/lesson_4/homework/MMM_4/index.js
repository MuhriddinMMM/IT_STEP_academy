const http = require("http");
const fs = require("fs");
const path = require("path");



const server = http.createServer((req, res) => { 

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
        
      return false;
    }
  }
  return num > 1;
}


function getPrimesFor(num) {
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(getPrimesFor(123));

})


const PORT = process.env.PORT || 3000;
server.listen(3000, () => {
  console.log(`server has been started on ... ${PORT}`);
});
