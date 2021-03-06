// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//My solve 2/10/2021
const vowels = (str) => {
  let vs = ['a','e','i','o','u']
  let newString = ''
  for(let char of str.toLowerCase()) {
    if(vs.includes(char)){
      newString += char
    }
  }
  return newString.length
};










//refactoring my solve
// function vowels(str) {
//   let vowelArr = ['a', 'e', 'i', 'o', 'u']
//   let obj = {}
//   for (let char of str.toLowerCase()) {
//     if (vowelArr.includes(char)) {
//       obj[vowels] = obj[vowels] + 1 || 1
//     }
//   }
//   return obj[vowels] ? obj[vowels] : 0
// }

module.exports = vowels;


//my own first attempt, passes 15 minutes, forgot how to build up the object (obj[vowels] = obj[vowels] + 1 || 1)
// function vowels(str) {
  // let obj = {}
  // for (let char of str) {
  //   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
  //   char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
  //     obj[vowels] = obj[vowels] + 1 || 1
  //   }
  // }
  // if (obj[vowels]) {
  //   return obj[vowels]
  // } else {
  //   return 0
  // }
// }

//Stephen's Solve 1 - iterative; use array for checker to make it easier in future to add or remove letters, 
//by using built in .includes can clean up really messy code from up above
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

//Stephen's Solve 2 - regex
//.match looks for anything that matches inside the [], 
//the g is to make it go through all the string, not stop at the first match,
//the i makes it case insensitive
//matches returns either an array or null
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);

//   return matches ? matches.length : 0
// }