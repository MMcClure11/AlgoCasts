// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true "abba"
//   palindrome("abcdefg") === false 'gfedcba'

//Solved 1/12/2021
const palindrome = str => {
  let reversed = str.split('').reduce((rev, char) => char + rev, '')
  return str === reversed
}

//my attempt...
// function palindrome(str) {
//   let arr = str.split('')
//   let reverseArr = arr.reverse()
//   let i;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] === reverseArr[i]){
//       return true
//     } else {
//       return false
//     }
//   }
// }

//Stephen's first Solve
// function palindrome(str){
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

//Stephen's second Solve using Array.prototype.every(), does more comparisons than necessary
//doing twice as much work, 'double comparison'
// function palindrome(str){
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   })
// }

//found solution from stack overflow...
// function palindrome(str){
//   var len = Math.floor(str.length / 2);
//   for (var i = 0; i < len; i++)
//     if (str[i] !== str[str.length - i - 1])
//       return false;
//   return true;
// }
module.exports = palindrome;
