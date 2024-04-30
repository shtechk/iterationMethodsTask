//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

let res = numbers.filter((num) => {
  if (num >= 25) {
    return true;
  } else {
    return false;
  }
});

let res2 = numbers.filter((num) => {
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
});

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

let res3 = numbers.map((num) => {
  return num ** 2;
});
console.log(res3);

let res4 = numbers.map((num) => {
  return num * 2;
});
console.log(res4);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

let res5 = numbers.filter((num) => {
  if (num >= 20) {
    return true;
  } else {
    return false;
  }
});

let res6 = res5.map((num) => {
  return num * 2;
});
console.log(res6);

let res7 = numbers.filter((num) => {
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
});

let res8 = res7.map((num) => {
  return num * 3;
});
console.log(res8);
