// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
class Vehicle {
  constructor(driver) {
    this.drive = function (kmh) { return kmh * 8   };
    this.stop = function () {    };
    this.driver = driver;
    this.speed = 0;
  }
}

class Train extends Vehicle {
  constructor(driver) {
    super(driver)
  }
}

class Truck extends Vehicle {
  constructor(driver) {
    super(driver)
    this.loadCargo = function (cargo) { return cargo };
    this.unloadCargo = function () {    };
  }
}


const newTruck = new Truck('Vasya')
console.log(newTruck.driver)
console.log(newTruck.drive(80))
console.log(newTruck.loadCargo(15300))


// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
