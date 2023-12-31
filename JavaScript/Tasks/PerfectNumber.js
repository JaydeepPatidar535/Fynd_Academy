function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  }
  
  const perfectNum = 28;
  const isPerfect = isPerfectNumber(perfectNum);
  console.log(`${perfectNum} is a perfect number: ${isPerfect}`);
  