function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
  }
  
  const weight = 70; // in kilograms
  const height = 1.75; // in meters
  const bmi = calculateBMI(weight, height);
  console.log("BMI:", bmi);
  