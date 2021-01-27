// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//1/26/21 woohoo I did it!! used knowledge of the steps problem and capitalize algo to make a new solve
const pyramid = (n) => {
  for(let r = 0; r < n; r++ ){
    let stair = ''
    for(let c = 0; c < n; c++){
      if(c <= r){
        stair += '#'
      } else {
        stair += ' '
      }
    }
    let level = ''
    level = stair.split('').reverse().join('') + stair.slice(1)
    console.log(level)
  }
}


module.exports = pyramid;

//Stephen solve two recursion, got most of it, just missed how to set up if for checking level.length === 2 * n - 1
// function pyramid(n, row = 0, level = '') {
//   if (n === row) {
//     return;
//   }  

//   if (level.length === 2 * n - 1) {
//     console.log(level)
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add; 

//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add)
// }


//Stephen solve one. I got how to get number of columns, missed how to get determine if it should have a #
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n -1) / 2);

//   for (let row = 0; row < n; row ++) {
//     let level = '';
//     for (let column = 0; column < (2 * n - 1); column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level)
//   }
// }