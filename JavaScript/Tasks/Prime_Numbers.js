// 4.	Prime Number: Write a function that checks if a number is prime.
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    if (number <= 3) {
      return true;
    }
  
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const num1 = 17;
  const num2 = 20;
  console.log(isPrime(num1)); // This will log true
  console.log(isPrime(num2)); // This will log false
  