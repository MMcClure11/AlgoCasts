// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//my first solution, used lots of Stack Overflow...about 20 minutes, making the hash was easy, sorting and getting the key was a struggle
// function maxChar(str) {
//   let hash = {}
//   let arr = str.split('')
//   arr.forEach(char => {
//     if (!hash[char]){
//       hash[char] = 1
//     } else {
//       hash[char] += 1
//     }
//   })
//   let values = Object.values(hash)
//   let sortedValues = values.sort(function(a, b){
//     return (hash[a] - hash[b])
//   })
//   let highestValue = sortedValues[0]
//   return Object.keys(hash).find(key => hash[key] === highestValue);
// }

//Stephen's Solve
// function maxChar(str){
//   const charMap= {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str){
//     if (charMap[char]){
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   //uses keys of object
//   for (let char in charMap){
//     if (charMap[char] > max){
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }


//Stack Overflow using reduce and ES6 syntax
// function maxChar(str){
//   let obj = {}
//   for (let char of str){
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
// }







//Common String Questions:
  //What is the most common character in the string?
  //Does sthring A have the same characters as string B (is it an anagram)?
  //Does the given string have any repeated characters in it?

//1/16/21
//I solved it!!
const maxChar = str => {

  hash = {}
  for(let char of str) {
    if(hash[char]) {
      hash[char] ++
    } else {
      hash[char] = 1
    }
  }
  let max = 0
  let maxChars = ''
  for(let char in hash) {
    if(hash[char] > max) {
      max = hash[char]
      maxChars = char
    }
  }
  return maxChars
}
module.exports = maxChar;
