//    1.	Reverse a Number: Implement a function that reverses the digits of a given number.
function reverseNumber(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

// Example usage:
const number = 12345;
const reversedNumber = reverseNumber(number);
console.log(reversedNumber); // This will log 54321


