// 3.Продемонстрировать работу циклов for…of, for…in, for, while

const testArray = [1, 12, 10, 3, 5, 100];
const testObject = { name: "Anna", age: 25, city: "Prague", job: "unemployed" };

let sum = 0;
let subtr = 0;
let keys = [];

for (i = 0; i < testArray.length; i++) {
  sum += testArray[i];
}

console.log(sum);

for (el of testArray) {
  subtr -= el;
}

console.log(subtr);

for (el in testObject) {
  keys.push(el);
}

console.log(keys);

let j = 0;
while (j <= 5) {
  console.log(j);
  j++;
}
