function hasLeapSecond(year) {
    // Leap seconds are usually added in June or December
    return year === 1999 || year === 2005 || year === 2012;
  }
  
  const yearToCheck = 1999;
  const hasLeap = hasLeapSecond(yearToCheck);
  console.log(`${yearToCheck} has leap second: ${hasLeap}`);
  