class Vehicle {
  /*
  color = 'red';

  constructor(color: string) {
    this.color = color;
  }
  */

  constructor(public color: string) {}

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'orange');
car.startDrivingProcess();
car.honk();
