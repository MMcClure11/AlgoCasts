// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//My Solve, had to stack overflow a solution to make an array of numbers 1 -> n
//about 20 min, actual fizz buzz part was very easy
function fizzBuzz(n) {
  let arr = Array.from(Array(n), (e, i) => i +1)
  arr.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0){
      console.log("fizzbuzz")
    } else if ( num % 3 === 0 ){
      console.log("fizz")
    } else if (num % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(num)
    }
  })
  
}

module.exports = fizzBuzz;
