//9.	Задача:
//Написать метод, который принимает массив строк в качестве параметра и возвращает
//отфильтрованный массив, содержащий те же элементы, но без “гусей”.
//“Гуси” – массив строк, заранее предопределённый вами в коде.
//Например,
//“Гуси” – ['London’, 'Paris’, 'Moscow’]
//Исходный массив – ['Minsk’, 'Moscow’, 'Berlin’, 'Toronto’, 'Paris’, 'Moscow’]
//Результат - ['Minsk’, 'Berlin’, 'Toronto’]

const origArray = ["Minsk", "Moscow", "Berlin", "Toronto", "Paris", "Moscow"];
const gusi = ["London", "Paris", "Moscow"];

function arrayWithoutGusi(original, gusi) { //функция с циклом фильтрации оригинального массива по каждому элементу массива "гусей"
  let arrayWithoutGusi = [...origArray]; //копия оригинального массива, которая будет изменяться при каждом цикле фильтрации
  for (el of gusi) {       
    arrayWithoutGusi = arrayWithoutGusi.filter(origElement => origElement !== el);
  }
  console.log(arrayWithoutGusi);
}

arrayWithoutGusi(origArray, gusi);
