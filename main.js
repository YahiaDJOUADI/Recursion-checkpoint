// Leap Year Checker
const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is a leap year.`;
      } else {
        return `${year} is not a leap year.`;
      }
    } else {
      return `${year} is a leap year.`;
    }
  } else {
    return `${year} is not a leap year.`;
  }
};

console.log(isLeapYear(2014));
console.log(isLeapYear(2004));
// Ticket Pricing
const ticketPrice = (age) => {
  let price;

  switch (true) {
    case age <= 12:
      price = 10;
      break;
    case age >= 13 && age <= 17:
      price = 15;
      break;
    case age >= 18:
      price = 20;
      break;
    default:
      price = "sorry invalid age";
  }

  return `The ticket price is $${price}`;
};

console.log(ticketPrice(10));
console.log(ticketPrice(16));
//Fibonacci Sequence
const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(8));
console.log(fibonacci(20));
//Power Function
const power = (base, exponent) => {
  if (exponent == 0) return 1;

  return base * power(base, exponent - 1);
};

console.log(power(2, 3));
console.log(power(5, 4));
