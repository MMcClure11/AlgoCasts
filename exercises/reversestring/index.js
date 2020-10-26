// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

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

function reverse(str) {
   reversed = '';

   for (let character of str){
     reversed = character + reversed;
   }
   
   return reversed;
}

// Stephen Solve 3

function reverse(str){

}

module.exports = reverse;
