// В другом файле описать класс B с несколькими методами, унаследовать его от класса A

class B extends A {
  constructor(name, age, profession, city) {
    super(name, age, profession);
    this.city = city;
  }
  personIsFrom() {
    console.log(`${this.name} is from ${this.city}`);
  }
  fullInfo() {
    console.log(
      `Person name: ${this.name}. From: ${this.city}. Age: ${this.age}. Profession: ${this.profession}`
    );
  }
}
