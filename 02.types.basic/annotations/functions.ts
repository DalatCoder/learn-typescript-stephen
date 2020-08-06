// Function take 2 numbers as args and return a total with type of number
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // return null
  // return void
};

const throwErrorBad = (message: string): never => {
  throw new Error(message);
};

// Better approach, avoid return never
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
