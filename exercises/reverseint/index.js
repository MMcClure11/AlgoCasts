// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//my 1st attempt, works but very clunky jaja

// function reverseInt(n) {
//   const numArr = n.toString().split('')
//   let newArr = []
//   if (Math.sign(n) === -1){
//     newArr.push("-")
//     let alteredReverseArr = numArr.slice(1).reverse()
//     let finalArr = newArr.concat(alteredReverseArr)
//     return parseInt(finalArr.join(''))
//   } else {
//     let reverseArr = numArr.reverse()
//     let finalArr = newArr.concat(reverseArr)
//     return parseInt(finalArr.join(''))
//   }
// }

// Stephen's Solve
// function reverseInt(n){
  // const reversed = n
  //   .toString()
  //   .split('')
  //   .reverse()
  //   .join('');

  // return parseInt(reversed) * Math.sign(n);
// }

//1/15/21 solve
function reverseInt(num) {
  let reversed = num.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(num)
}

module.exports = reverseInt;
