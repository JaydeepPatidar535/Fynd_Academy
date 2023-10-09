function calculateCompoundInterest(principal, rate, time) {
    const compoundInterest = principal * (Math.pow(1 + rate, time) - 1);
    return compoundInterest;
  }
  
  const principal = 1000;
  const rate = 0.05; // 5% interest rate
  const time = 5; // 5 years
  const compoundInterest = calculateCompoundInterest(principal, rate, time);
  console.log("Compound Interest:", compoundInterest);
  