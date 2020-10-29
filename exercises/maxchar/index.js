// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//my first solution, used lots of Stack Overflow...about 20 minutes, making the hash was easy, sorting and getting the key was a struggle
function maxChar(str) {
  let hash = {}
  let arr = str.split('')
  arr.forEach(char => {
    if (!hash[char]){
      hash[char] = 1
    } else {
      hash[char] += 1
    }
  })
  let values = Object.values(hash)
  let sortedValues = values.sort(function(a, b){
    return (hash[a] - hash[b])
  })
  let highestValue = sortedValues[0]
  return Object.keys(hash).find(key => hash[key] === highestValue);
  
}

module.exports = maxChar;
