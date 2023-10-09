function calculateFactorial(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }
  
  const factorialNum = 5;
  const factorialResult = calculateFactorial(factorialNum);
  console.log(`${factorialNum}! =`, factorialResult);
  