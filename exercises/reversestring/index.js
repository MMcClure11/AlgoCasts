// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let arr = str.split('')
  // console.log(arr)
  let newArr = arr.reverse()
  // console.log(newArr.join(''))
  return newArr.join('') 
}

module.exports = reverse;
