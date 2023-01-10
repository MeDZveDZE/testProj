//4.Продемонстрировать работу switch…case

const x = Math.round(Math.random()); //рандомное дробное число от 0 до 1 округляется, если 0 - победа, 1 - поражение.

switch (x) {
  case 0:
    console.log("It's 0! You lost! :(");
    break;
  case 1:
    console.log("It's 1! You won! :)");
}
