function calculateCoffeeSupply(age, cupsPerDay) {
    const maxAge = 90; // Constant max age (you can adjust this value)
    const cupsPerYear = cupsPerDay * 365;
    const coffeeConsumed = Math.round(cupsPerYear * (maxAge - age));
  
    console.log("You will need " + coffeeConsumed + " cups of coffee to keep you awake until the age of " + maxAge + ".");
  }
  
  // Call the function three times with different values
  calculateCoffeeSupply(30, 2.5); // Example 1
  calculateCoffeeSupply(40, 3.2); // Example 2
  calculateCoffeeSupply(25, 1.8); // Example 3
  