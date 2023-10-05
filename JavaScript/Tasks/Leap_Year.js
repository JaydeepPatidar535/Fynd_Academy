// 5.	Leap Year: Implement a function to determine if a year is a leap year.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Example usage:
  const year1 = 2020;
  const year2 = 2024;
  const year3 = 2100;
  console.log(isLeapYear(year1)); // This will log true
  console.log(isLeapYear(year2)); // This will log true
  console.log(isLeapYear(year3)); // This will log false
  