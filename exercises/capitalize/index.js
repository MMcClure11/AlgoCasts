// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Stephen Solve 2
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++){
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

//standard library methods: .slice() on a string
//const word = "there"
//word.slice(1) //=> here
//word[0].toUpperCase() //=> T

//My solve 1/21/21 less than 10 minutes
const capitalize = (str) => {
  let array = str.split(' ')
  let result = []
  for(let word of array) {
    let arrWord = word.split('')
    let newWord = ''
    newWord += arrWord[0].toUpperCase()
    newWord += arrWord.slice(1, arrWord.length + 1).join('')
    result.push(newWord)
  }
  return result.join(' ')
}

module.exports = capitalize;

//My first solve, less than 10 min
// function capitalize(str) {
//   let arr = str.split(" ")
//   let upperArr = []
//   arr.forEach(word => {
//     upperArr.push(word[0].toUpperCase() + word.slice(1))
//   })
//   return upperArr.join(" ")
// }

//Stephen Solve 1
// function capitalize(str) {
//   const words = [];
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//   return words.join(' ');
// }
