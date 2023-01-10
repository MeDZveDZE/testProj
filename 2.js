//2.Продемонстрировать работу if…else

const enteredNumber = +(prompt('Enter number', )); //юзер вводит в окно для ввода значение
const finalText = `Entered value ${enteredNumber} `;

if (enteredNumber < 0) { //цикл проверяет, является это положительным, отрицательным числом, нулём или не числом
  console.log(finalText + "< 0");
} else if (enteredNumber > 0) {
  console.log(finalText + "> 0");
} else if (enteredNumber === 0) {
  console.log(finalText + "= 0");
} else {
  console.log('Entered value is not a number');
}
