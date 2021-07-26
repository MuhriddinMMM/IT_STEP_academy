function range(start, end, step) {
  let i = start,
    arr = [];
  if (!step) {
    step = 1;
  }
  if (step < 0) {
    start = end;
    end = i;
  }
  for (; i >= start && i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}

function sum1(arr) {
  let counter = arr[0];
  for (let i = arr[0]; i < arr.length; i++) {
    counter += arr[i];
  }
  return counter;
}

function sum2(arr) {
  let res = arr.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  return res;
}

console.log(sum1(range(1, 10)));
console.log(sum2(range(10, 20)));
console.log(range(5, 2, -1));
