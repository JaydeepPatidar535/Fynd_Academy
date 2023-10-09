function tellFortune(numChildren, partnerName, location, jobTitle) {
    var fortune = "You will be a " + jobTitle + " in " + location + ", and married to " + partnerName + " with " + numChildren + " kids.";
    console.log(fortune);
  }
  
  // Call the function with different values for the arguments to see different fortune predictions
  tellFortune(2, "Alice", "New York", "Software Engineer");
  tellFortune(3, "Bob", "Los Angeles", "Teacher");
  tellFortune(0, "Carol", "Chicago", "Doctor");
  