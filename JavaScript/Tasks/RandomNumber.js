function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const min = 1;
  const max = 100;
  const randomNum = generateRandomNumber(min, max);
  console.log("Random Number:", randomNum);
  