// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Stephen's Solve 1 - iterative
function vowels(str) {
  
}

module.exports = vowels;


//my own first attempt, passes 15 minutes, forgot how to build up the object (obj[vowels] = obj[vowels] + 1 || 1)
// function vowels(str) {
//   let obj = {}
//   for (let char of str) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//     char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//       obj[vowels] = obj[vowels] + 1 || 1
//     }
//   }
//   if (obj[vowels]) {
//     return obj[vowels]
//   } else {
//     return 0
//   }
// }