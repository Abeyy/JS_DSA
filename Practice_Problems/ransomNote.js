/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

function getCharHash(str) {
  let charMap = {};
    for (char of str) {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1
  }
    return charMap
}

var canConstruct = function(ransomNote, magazine) {
    let ransomCharHash = getCharHash(ransomNote)
    let magCharHash = getCharHash(magazine)
    for (char in ransomCharHash) {
        if (!magCharHash[char]) {
            return false;
        }
        if (ransomCharHash[char] > magCharHash[char]) {
            return false;
        }
    }
    
    return true;
};

console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))