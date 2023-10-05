// 6.	Calculate Age: Create a function that calculates a person's age based on their birth year.
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
  
  // Example usage:
  const birthYear = 2000;
  const age = calculateAge(birthYear);
  console.log(`You are ${age} years old.`);
  