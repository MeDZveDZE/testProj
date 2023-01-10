// 7.	Написать методы с использованием callbacks, promises, async/await
//- Только callback

function callbackOnly(name, age, callbackFn) {//выводит информацию о госте и привествует его в консоли
  console.log(`Our guest is ${name}, ${age} years old.`);
  callbackFn(name);
}
function calledFunction(parameter) {
  console.log(parameter + ", please, have a seat!");
}
callbackOnly("Max", 29, calledFunction);



// - Только promises (resolve + reject flow)

const getPosition = () => {//запрашивает у юзера доступ к геолокации. возвращает ошибку, если юзер отклонил запрос, выводит в консоль сообщение, если успешно разрешил
    const promise = new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        success => {
          resolve(success);
          console.log('Geolocation is allowed');
        },
        error => {
          reject(error);
        },
      );
    });
  };
getPosition();



//- Только async/await

async function loadUsersFromWeb() { //функция загружает список юзеров и выводит его в консоль
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const users = await response.json();
  console.log(users);
}

loadUsersFromWeb();



//- Комбинация callback + promise

function callBackAndPromise(name, callbackFn) {//функция выводит имя юзера и приветствует его
  console.log("Username is", name);
  callbackFn(name);
}

function callBackFunction(userName) {
  return new Promise((resolve, reject) => {
    resolve(console.log(`Hello there, ${userName}! Have a good day!`));
  });
}

callBackAndPromise("David", callBackFunction);



//- Комбинация promise + async/await

function timer (miliSeconds) { //setTimeOut обёрнутый в промис для функции greetings
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, miliSeconds);
    });
    return promise;
  };

async function greetings(name) { //приветствует пользователя через заданный интервал времени, изменяя регистр букв имени на верхний
  await timer (2000);
  console.log("Hi " + name.toUpperCase());
}

greetings("Max");
