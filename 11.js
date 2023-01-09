//11.	Задача:
// Написать метод, который принимает строку в качестве параметра и возвращает ту же строку,
//но все пробелы заменяет на нижнее подчёркивание.
// Например,
// Исходная строка – “Я люблю Javascript”
// Результат – “Я_люблю_Javascript”

const str = "Я люблю Javascript";

function replaceFn(value) {
  const changedStr = (value.split(" ").join("_"));
  console.log(changedStr);
}
replaceFn(str);