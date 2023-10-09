function calculatePetAge(petAge, conversionRate = 7, petType = "cat") {
    var petYears = petAge * conversionRate;
    console.log("Your " + petType + " is " + petYears + " years old in " + petType + " years!");
  }
  
  // Call the function three times with different pet ages and conversion rates
  calculatePetAge(3); // Default conversion rate for cats (7)
  calculatePetAge(4, 5, "dog"); // Custom conversion rate for dogs (5)
  calculatePetAge(2, 3, "rabbit"); // Custom conversion rate for rabbits (3)
  