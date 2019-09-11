
// With For Loop:
function isPalindrome (str) {
  str = str.replace(/\W/g, '').toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  
  return true
}

console.log(isPalindrome('Anna'))
console.log(isPalindrome2('Anna'))

function isPalindrome2 (str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}