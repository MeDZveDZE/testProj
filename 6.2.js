// В другом файле описать класс B с несколькими методами, унаследовать его от класса A

class B extends A {         //расширеный класс
  constructor(name, age, profession, city) {
    super(name, age, profession);
    this.city = city;
  }
  personIsFrom() {          //метод выводит имя и город персоны
    console.log(`${this.name} is from ${this.city}`);
  }
  fullInfo() {
    console.log(            //метод выводит всю информацию о персоне
      `Person name: ${this.name}. From: ${this.city}. Age: ${this.age}. Profession: ${this.profession}`
    );
  }
}

console.log(B);
