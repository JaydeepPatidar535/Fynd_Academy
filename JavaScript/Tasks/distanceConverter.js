// Function to convert meters to feet
function metersToFeet(meters) {
    const feet = meters * 3.281;
    console.log(meters + " meters is equal to " + feet + " feet.");
  }
  
  // Function to convert feet to meters
  function feetToMeters(feet) {
    const meters = feet * 0.3048;
    console.log(feet + " feet is equal to " + meters + " meters.");
  }
  
  // Example usage:
  metersToFeet(10); // Output: "10 meters is equal to 32.81 feet."
  feetToMeters(20); // Output: "20 feet is equal to 6.096 meters."
  