// 7.	Написать методы с использованием callbacks, promises, async/await
//- Только callback

function callbackOnly(name, age, callbackFn) {
  console.log(`Our guest is ${name}, ${age} years old.`);
  callbackFn(name);
}
function calledFunction(parameter) {
  console.log(parameter + ", please, have a seat!");
}
callbackOnly("Max", 29, calledFunction);
