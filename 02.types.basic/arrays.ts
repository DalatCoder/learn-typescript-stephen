const carMakers = ['ford', 'toyota', 'chevy'];
const arr: string[] = [];

const dates = [new Date(), new Date()];

const carsByMaker = [['f50'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];

// Prevent incompatiable values
// carMakers.push(1)

// Help with built-in method
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), ' 2030-10-10'];
importantDates.push('2030-10-20');
importantDates.push(new Date());
// importantDates.push(1000)
