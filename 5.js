//5.Продемонстрировать работу try…catch…finally

const salaryPerHour = "asd";
const workHours = 170;

try {
  //ловит ошибку если salaryPerHour <=0 или не число. редактировать salaryPerHour вручную перед запуском. 
  if (salaryPerHour <= 0 || isNaN(+salaryPerHour)) {
    throw new Error("Error with your salary per hour value! Check your input!");
  } else
    console.log(`Your sallary this month is $${salaryPerHour * workHours}`);
} catch (error) {
  console.log(error);
  console.log("Be more careful next time!");
} finally {
  console.log("Have a good holidays!");
}
