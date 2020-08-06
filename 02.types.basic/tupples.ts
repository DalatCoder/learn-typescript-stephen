const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias represent a tupple
type Drink = [string, boolean, number];

// Tupples
const pepsi: Drink = ['brown', true, 40];
// pepsi[0] = 40;
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Tupples is not useful
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3344,
};
