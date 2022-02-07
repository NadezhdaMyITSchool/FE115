const Car = function (model, engine, tank, hitch = false, carSeats = 4) {
 this.model = model;
 this.engine = engine;
 this.carSeats = carSeats;
 this.hitch = false;
 this.passenger = 0;

 this.tank = tank;
 this.consumption = 0;

 this.start = false;
 this.stop = true;

 this.setStartEngine = function (start) {
  this.start = start;
  this.stop = !start;
 }

 this.setStopEngine = function (stop) {
  this.start = !stop;
  this.stop = stop;
 }

 this.addPassenger = function (number = 0) {
  if (carSeats && number) {
   let maxPassenger = carSeats - 1 - this.passenger;
   for (let i = 0; i <= number; i++) {
    if (maxPassenger - i > 0) {
     this.passenger++;
    }
   }
  }
 }

 this.removePassenger = function (number = 0) {
  if (this.passenger && number) {
   for (let i = 0; i <= number; i++) {
    if (this.passenger - i >= 0) {
     this.passenger--;
    }
   }
  }
 }

 this.fuelConsumption = function (cycle) {
  this.result = 0;
  if (this.consumption[cycle] > 0) {
   this.result = Math.round((this.tank / this.consumption[cycle]) * 100);
  }
 }

 this.getEngineConsumption = function () {
  switch (this.engine) {
   case 'diesel':
    this.consumption = {city: 6.1, outside: 4.2, mixed: 4.9};
    break;
   case 'petrol':
    this.consumption = {city: 9.5, outside: 5.7, mixed: 8.0};
    break;
   case 'electricity':
   default:
    this.consumption = {city: 0, outside: 0, mixed: 0};
    break;
  }
 }

 this.get = function () {
  this.area = prompt('Drive area (city, outside, mixed): ');
  if (this.area !== undefined && this.area != null && this.area !== ''
   && this.area !== ' ' && typeof this.area !== 'boolean') {
   this.getEngineConsumption();
   this.fuelConsumption(this.area);
  }
  console.log(`
            start: ${this.start};
            stop: ${this.stop};
            model: ${this.model};
            engine: ${this.engine};
            carSeats: ${this.carSeats};
            hitch: ${this.hitch};
            passenger: ${this.passenger};
            tank: ${this.tank};
            city consumption: ${this.consumption.city};
            outside consumption: ${this.consumption.outside};
            mixed consumption: ${this.consumption.mixed};
            result: ${this.result}
        `);
 }
}

let mustangCar = new Car('Mustang', 'diesel', 50);
mustangCar.addPassenger(3);
mustangCar.get();
// mustangCar.removePassenger(2);
// mustangCar.get();
