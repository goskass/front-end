// Родительский класс для электроприборов
class ElectricAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  turnOn() {
    if (!this.pluggedIn) {
      console.log(`${this.name} включен в розетку.`);
      this.pluggedIn = true;
    } else {
      console.log(`${this.name} уже включен в розетку.`);
    }
  }

  turnOff() {
    if (this.pluggedIn) {
      console.log(`${this.name} выключен из розетки.`);
      this.pluggedIn = false;
    } else {
      console.log(`${this.name} уже выключен из розетки.`);
    }
  }
}

// лампа
class DeskLamp extends ElectricAppliance {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  adjustBrightness(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name} яркость установлена на ${this.brightness}.`);
  }
}

// компьютер
class Computer extends ElectricAppliance {
  constructor(name, power, brand) {
    super(name, power);
    this.brand = brand;
  }
}

// фен
class HairDryer extends ElectricAppliance {
  constructor(name, power, speedLevels) {
    super(name, power);
    this.speedLevels = speedLevels;
    this.currentSpeed = 0;
    this.drying = false;
  }

  setSpeed(speed) {
    if (speed >= 0 && speed <= this.speedLevels) {
      this.currentSpeed = speed;
      console.log(`${this.name} установлен на уровень ${speed}.`);
    } else {
      console.log(`Недопустимый уровень скорости для ${this.name}.`);
    }
  }

  startDrying() {
    if (!this.drying) {
      console.log(`${this.name} начал сушить волосы.`);
      this.drying = true;
    } else {
      console.log(`${this.name} уже включен.`);
    }
  }

  stopDrying() {
    if (this.drying) {
      console.log(`${this.name} прекратил сушить волосы.`);
      this.drying = false;
    } else {
      console.log(`${this.name} уже выключен.`);
    }
  }
}

// бритва
class ElectricShaver extends ElectricAppliance {
  constructor(name, power, isWaterproof) {
    super(name, power);
    this.isWaterproof = isWaterproof;
    this.shaving = false;
  }

  startShaving() {
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
  }

  stopShaving() {
    if (this.shaving) {
      console.log(`${this.name} прекратил бриться.`);
      this.shaving = false;
    } else {
      console.log(`${this.name} уже выключена.`);
    }
  }
}

const lamp = new DeskLamp('Настольная лампа', 60, 'яркая');
const computer = new Computer('Компьютер', 500, 'Dell');
const hairDryer = new HairDryer('Фен', 1800, 3);
const electricShaver = new ElectricShaver('Электрическая бритва', 40, true);


lamp.turnOn();
lamp.adjustBrightness('тусклая');
computer.turnOn();
hairDryer.turnOn();
hairDryer.setSpeed(2);
hairDryer.startDrying();
electricShaver.turnOn();
electricShaver.startShaving();
lamp.turnOff();
computer.turnOff();
hairDryer.stopDrying();
hairDryer.turnOff();
electricShaver.stopShaving();
electricShaver.turnOff();
