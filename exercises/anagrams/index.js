// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Stephen's Solve 2. has some interesting performance issues we'll discuss in the future
// uses array method: .sort()

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

//remove spaces and puncuation
//lower case the string
//RegExp to remove spaces and punctuation /w
// const word = "Hi ThERE!!!"
// let newWord = word.replace(/[^\w]/g, "").toLowerCase();
// console.log(newWord)



//my first attempt...i did it!
// function anagrams(stringA, stringB) {
//   const objA = {}
//   const objB = {}
//   const strA = stringA.replace(/[^\w]/g, "").toLowerCase()
//    const strB = stringB.replace(/[^\w]/g, "").toLowerCase()
//   for (let char of strA ) {
//     if (!objA[char]) {
//       objA[char] = 1
//     } else {
//       objA[char] += 1
//     }
//   }
//   for (let char of strB ) {
//     if (!objB[char]) {
//       objB[char] = 1
//     } else {
//       objB[char] += 1
//     }
//   }
  
//   if (Object.keys(objA).length !== Object.keys(objB).length) {
  //   return false
  // }
  // for (let k in objA) {
  //   if (objA[k] === objB[k] ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
// }

//Stephen's Solve 1, make a helper function for making the charMap!
//notice when making this solve we iterate through stringA once to build aCharMap, once for stringB and again for comparing the two charMaps
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
  
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char] ) {
//       return false;
//     } else {
//       return true;
//     }
//   }

// }

// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }

//completed 1/19/21
const anagrams = (strA, strB) => {
  let cleanA = strA.replace(/[^\w]/g, '').toLowerCase();
  let cleanB = strB.replace(/[^\w]/g, '').toLowerCase();
  objA = {}
  objB = {}
  for(let char of strA) {
    objA[char] ? objA[char] ++ : objA[char] = 1
  }
  for(let char of strB) {
    objB[char] ? objB[char] ++ : objB[char] = 1
  }
  if (Object.keys(objA).length !== Object.keys(objB).length){
    return false
  }
  for(let char in objA) {
    if(objA[char] !== objB[char]) {
      return false
    }
  }
  return true
}

module.exports = anagrams;