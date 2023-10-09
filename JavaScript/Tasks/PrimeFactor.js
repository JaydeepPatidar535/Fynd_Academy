function primeFactors(num) {
    const factors = [];
    let divisor = 2;
  
    while (num > 2) {
      if (num % divisor === 0) {
        factors.push(divisor);
        num = num / divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  
  const numberToFactor = 36;
  const factors = primeFactors(numberToFactor);
  console.log("Prime Factors:", factors);
  