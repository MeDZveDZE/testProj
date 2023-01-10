//5.Продемонстрировать работу try…catch…finally

const salaryPerHour = 2;
const workHours = 170;

try {//ловит ошибку с неверно использованным названием переменной workHours...
  console.log(`Your sallary this month is $${salaryPerHour * workhours}`);
} catch (error) {
  console.log(error);
  console.log('Be more careful next time!')
} finally {
  console.log("Have a good holidays!");
}
