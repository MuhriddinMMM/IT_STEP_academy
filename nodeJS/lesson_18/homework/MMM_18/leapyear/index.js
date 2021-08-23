function leapYearFind(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
console.log(leapYearFind(2000));