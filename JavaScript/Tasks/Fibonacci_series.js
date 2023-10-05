// 8.	Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
function generateFibonacci(n) {
    const fibonacci = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    return fibonacci;
  }
  
  // Example usage:
  const numberOfTerms = 10;
  const fibonacciSequence = generateFibonacci(numberOfTerms);
  console.log(fibonacciSequence);
  