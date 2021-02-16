// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Stephen's Iterative solve
//runtime - for every increase in n we have to calculate one additional number, linear runtime
//one for loop, incrementing by 1 ie linear runtime
// function fib(n) {
//   const result = [0, 1];

//   for(let i = 2; i <= n; i++){
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }
//   return result[n];
// }

//Stephen's Recursive Solution
//fib(5) makes 15 calls to fib total, fib(6) makes 24 calls
//this is exponential run time 2^n, it slightly less than doubles each time
//your interviewer will then ask, how can you improve the runtime?
//the answer they want is memoization
//Store the arguments of each function call along with the result.
//If the function is called again with the same arguments, return the precomputed result, rather than running the function again.
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

//Recursive solution with Memoizer
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n; 
  }
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

//2/16/21 My solution
// function fib(n) {
//   let prev = 1;
//   let prevPrev = 1; 
//   let result = 0;
//   if (n === 1) {
//     return prev
//   } else if ( n === 2 ){
//     return prevPrev
//   }
//   for(let i = 3; i <= n; i++){
//     result = prev + prevPrev
//     prev = prevPrev
//     prevPrev = result
//   }
//   return result
// }

module.exports = fib;
