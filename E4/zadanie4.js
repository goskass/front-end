// Родительская функция для электроприборов
function ElectricAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

// Методы родительской функции
ElectricAppliance.prototype.turnOn = function() {
  if (!this.pluggedIn) {
    console.log(`${this.name} включен в розетку.`);
    this.pluggedIn = true;
  } else {
    console.log(`${this.name} уже включен в розетку.`);
  }
};

ElectricAppliance.prototype.turnOff = function() {
  if (this.pluggedIn) {
    console.log(`${this.name} выключен из розетки.`);
    this.pluggedIn = false;
  } else {
    console.log(`${this.name} уже выключен из розетки.`);
  }
};

// Дочерний класс лампа
function DeskLamp(name, power, brightness) {
  ElectricAppliance.call(this, name, power);
  this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

// Методы класса лампы
DeskLamp.prototype.adjustBrightness = function(newBrightness) {
  this.brightness = newBrightness;
  console.log(`${this.name} яркость установлена на ${this.brightness}.`);
};

// Дочерний класс компьютер
function Computer(name, power, brand) {
  ElectricAppliance.call(this, name, power);
  this.brand = brand;
}

Computer.prototype = Object.create(ElectricAppliance.prototype);
Computer.prototype.constructor = Computer;

// Дочерний класс фен
function HairDryer(name, power, speedLevels) {
  ElectricAppliance.call(this, name, power);
  this.speedLevels = speedLevels;
  this.currentSpeed = 0;
  this.drying = false;
}

HairDryer.prototype = Object.create(ElectricAppliance.prototype);
HairDryer.prototype.constructor = HairDryer;

// Методы класса фен
HairDryer.prototype.setSpeed = function(speed) {
  if (speed >= 0 && speed <= this.speedLevels) {
    this.currentSpeed = speed;
    console.log(`${this.name} установлен на уровень ${speed}.`);
  } else {
    console.log(`Недопустимый уровень скорости для ${this.name}.`);
  }
};

HairDryer.prototype.startDrying = function() {
  if (!this.drying) {
    console.log(`${this.name} начал сушить волосы.`);
    this.drying = true;
  } else {
    console.log(`${this.name} уже включен.`);
  }
};

HairDryer.prototype.stopDrying = function() {
  if (this.drying) {
    console.log(`${this.name} прекратил сушить волосы.`);
    this.drying = false;
  } else {
    console.log(`${this.name} уже выключен.`);
  }
};

//  класс электрическая бритва
function ElectricShaver(name, power, isWaterproof) {
  ElectricAppliance.call(this, name, power);
  this.isWaterproof = isWaterproof;
  this.shaving = false;
}

ElectricShaver.prototype = Object.create(ElectricAppliance.prototype);
ElectricShaver.prototype.constructor = ElectricShaver;

// Методы класса бритвы
ElectricShaver.prototype.startShaving = function() {
  if (!this.shaving) {
    if (this.isWaterproof) {
      console.log(`${this.name} начал бриться.`);
      this.shaving = true;
    } else {
      console.log(`${this.name} не водонепроницаемая. Нельзя использовать в ванной.`);
    }
  } else {
    console.log(`${this.name} уже включена.`);
  }
};

ElectricShaver.prototype.stopShaving = function() {
  if (this.shaving) {
    console.log(`${this.name} прекратил бриться.`);
    this.shaving = false;
  } else {
    console.log(`${this.name} уже выключена.`);
  }
};

//  экземпляры приборов

const lamp = new DeskLamp('Настольная лампа', 60, 'яркая');
const computer = new Computer('Компьютер', 500, 'Dell');
const hairDryer = new HairDryer('Фен', 1800, 3);
const electricShaver = new ElectricShaver('Электрическая бритва', 40, true);

// Включение
lamp.turnOn();
lamp.adjustBrightness('тусклая');

computer.turnOn();

hairDryer.turnOn();
hairDryer.setSpeed(2);
hairDryer.startDrying();

electricShaver.turnOn();
electricShaver.startShaving();

// Выключение
lamp.turnOff();
computer.turnOff();
hairDryer.stopDrying();
hairDryer.turnOff();
electricShaver.stopShaving();
electricShaver.turnOff();

