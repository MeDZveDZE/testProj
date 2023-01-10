// 6.Продемонстрировать работу с классами.
// Описать класс A с конструктором и несколькими методами

class A {//класс с 2 методами
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  nameAndAge() {//выводит имя и возраст персоны 
    console.log(
      `Person's name is ${this.name} and they are ${this.age} years old`
    );
  }
  nameAndProfession() {//выводит имя и профессию персоны
    console.log(
      `Person name is ${this.name} and their profession is ${this.profession}`
    );
  }
}

console.log(A);
