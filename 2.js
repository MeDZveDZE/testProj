//2.Продемонстрировать работу if…else

const enteredNumber = +(prompt('Enter number', ));
const finalText = `Entered value ${enteredNumber} `;

if (enteredNumber < 0) {
  console.log(finalText + "< 0");
} else if (enteredNumber > 0) {
  console.log(finalText + "> 0");
} else if (enteredNumber === 0) {
  console.log(finalText + "= 0");
} else {
  console.log('Entered value is not a number');
}
