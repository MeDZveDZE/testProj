//- Ещё в одном файле создать экземпляр класса В и вызвать метод класса A и класса B

const testObjectForMethods = new B("Anna", 29, "Engineer", "Minsk");
testObjectForMethods.nameAndAge();         //метод класса А: выводит имя и возраст 
testObjectForMethods.nameAndProfession();  //метод класса А: выводит имя и профессию
testObjectForMethods.personIsFrom();       //метод расширенного класса B: выводит имя и город
testObjectForMethods.fullInfo();           //метод расширенного класса B: выводит всю информацию по персоне
