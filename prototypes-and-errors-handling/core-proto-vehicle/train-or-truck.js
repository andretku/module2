// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
   }
Vehicle.prototype.drive = function(kmh) {  return kmh * 8   }
Vehicle.prototype.stop = function() {     }

function Train(driver) {
  Vehicle.call(this, driver)
}
Train.prototype = new Vehicle();

function Truck(driver) {
  Vehicle.call(this, driver);
  // this.loadCargo = function (cargo) { return cargo };
}
Truck.prototype = new Vehicle();
Truck.prototype.loadCargo = function (cargo) { return cargo };
Truck.prototype.unloadCargo = function () {        };
Truck.prototype.constructor = Truck;


const newTruck = new Truck('Vasya')
console.log(newTruck.driver)
console.log(newTruck.drive(80))
console.log(newTruck.loadCargo(15300))


// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
