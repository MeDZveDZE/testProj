//8.	Задача:Написать метод, который принимает массив строк в качестве параметра
// и выводит в консоль слово с наибольшим количеством букв.
// Если таких слов несколько - выводит их все

const arrayOfStrings = [
  "Я люблю Javascript",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
  "How you doing? Fine, thanks.",
];

function longestWord(array) {
  const arrayOfWords = arrayOfStrings.join(" ").split(/[ ,.;:?!()]/); //регекс для разделения строк на массив слов, т.к. одним пробелом или запятой не разделить.
  let longestWordLength = 0;
  for (el of arrayOfWords) {
    //цикл для определения самого длинного слова 
    if (el.length > longestWordLength) {
      longestWordLength = el.length;
    }
  }

  const resultsArray = []; //цикл пуша самых длинных слов в новый массив
  for (el of arrayOfWords) {
    if (el.length === longestWordLength) {
      resultsArray.push(el);
    }
  }
  console.log(
    `The longest word(s) (${longestWordLength} symbols):${resultsArray.join(", ")}.`);
    //вывод результата
}

longestWord(arrayOfStrings);
