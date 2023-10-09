function isOddOrEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  
  const numberToCheck = 7;
  const oddOrEven = isOddOrEven(numberToCheck);
  console.log(`${numberToCheck} is ${oddOrEven}`);
  