function calculateExponent(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  
  const base = 2;
  const exponent = 3;
  const result = calculateExponent(base, exponent);
  console.log(`${base}^${exponent} =`, result);
  