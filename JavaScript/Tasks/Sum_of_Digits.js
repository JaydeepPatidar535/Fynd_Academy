// 7.	Sum of Digits: Write a function that calculates the sum of the digits of a number.
function sumOfDigits(number) {
    const digits = number.toString().split('').map(Number);
    return digits.reduce((sum, digit) => sum + digit, 0);
  }
  
  // Example usage:
  const number = 12345;
  const sum = sumOfDigits(number);
  console.log(`The sum of the digits is: ${sum}`);
  