//    2.	Check Palindrome: Write a function to check if a given word is a palindrome (reads the same forwards and backward).

function isPalindrome(word) {
    const cleanedWord = word.toLowerCase().replace(/\s/g, "");
    return cleanedWord === cleanedWord.split("").reverse().join("");
  }
  
  // Example usage:
  const word1 = "racecar";
  const word2 = "hello";
  console.log(isPalindrome(word1)); // This will log true
  console.log(isPalindrome(word2)); // This will log false