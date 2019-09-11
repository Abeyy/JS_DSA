// create character maps with objects to compare the two strings
// use regex to make sure we ignore spaces and punctuation

function anagrams(strA, strB) {
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);
  
  // if lengths are different, they arent anagrams
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }
  
  return true;
}

// Take in a string, create an object hash with it, to be able to count the keys
// and values 
function buildCharMap(str) {
  const charMap = {};
  
  // working with string, so use "of" instead of "in"
  // use regular expression to remove spaces, punctuation and make it all lowercase
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  console.log(charMap)
  return charMap;
}

let firstString = "Abey";
let secondString = "Yeba!"

console.log(anagrams(firstString, secondString))