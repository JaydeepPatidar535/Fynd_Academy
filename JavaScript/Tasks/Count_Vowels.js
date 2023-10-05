// 3.	Count Vowels: Create a function that counts the number of vowels in a given string.
function countVowels(str) {
    const vowelRegex = /[aeiouAEIOU]/g; // Regular expression to match vowels
    const vowelMatches = str.match(vowelRegex);
    return vowelMatches ? vowelMatches.length : 0;
  }
  
  // Example usage:
  const text = "Hello, World!";
  const numVowels = countVowels(text);
  console.log(numVowels); // This will log 3
  