// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Two succesful attempts 1/12/2021

// function reverse(str) {
//   let arr = str.split('')
//   return arr.reverse().join('')
// }


function reverse(str) {
  let newArr = []
  let arr = str.split('')
  for(let i = arr.length -1; i >= 0; i--){
    newArr.push(arr.pop())
  }
  return newArr.join('')
}
///////////

//My solve 15 min first time

// function reverse(str) {
//   let arr = str.split('')
//   // console.log(arr)
//   let newArr = arr.reverse()
//   // console.log(newArr.join(''))
//   return newArr.join('') 
// }

// Stephen Solve 1 "easiest"

// function reverse(str) {
//   return str.split('').reverse().join('') 
// }

// Stephen Solve 2, "Don't use reverse Helper"

// function reverse(str) {
//    reversed = '';

//    for (let character of str){
//      reversed = character + reversed;
//    }
   
//    return reversed;
// }

// Stephen Solve 3, more complicated with reduce helper for array, wow the interviewer

// function reverse(str){
//   // debugger;
//   return str.split('').reduce((reversed, character) => character + reversed, '');
// }

// reverse('asdf')

//new attempt next day!

// function reverse(str){
//   let arr = str.split('')
//   let newArr = []
//   arr.forEach(char => {
//     newArr.unshift(char)
//   })
//   return newArr.join('')
// }

module.exports = reverse;
