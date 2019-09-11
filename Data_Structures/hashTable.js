/* HASH TABLES
   Hash tables are data structures used to implement associative arrays, or 
   mappings of key-value pairs.
   
   Hash tables are a common way to implement the map data structure, or objects.
   
   They are widely used because of how efficient they are.
   In fact the average time for search, insert, and delete is O(1). The worst 
   case is O(n).
   
   Hash functions work by taking a key input, and running it through a hash 
   function. A hash function basically just maps strings to number. Usually
   those numbers correspond to indexes in an array.
  
   A hash function needs to be consistent in what its output is (if you pass in 
   "John Smith" to a hash function twice it should output the same thing both 
   times) and it should map different words to different numbers. If two words 
   get hashed to the same number (same number = the same index in the array), 
   this is called a "collision".
   
   One way to get around a collision is just to store both key value pairs at
   the index, then upon lookup of either you iterate through the bucket of items
   to find the key you are looking for. The problem with this is that it slows 
   things down because it takes time to iterate on the bucket.
   
   In JavaScript, hash tables are used to implement objects.
   
 */
 
 // max is the number of buckets we are using to store our values
 var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
 }
 
 let HashTable = function () {
   let storage = [];
   const storageLimit = 4;
   
   this.print = function () {
     console.log(storage)
   }
   
   this.add = function(key, value) {
     var index = hash(key, storageLimit);
     if (storage[index] === undefined) {
       storage[index] = [[key,value]];
     } else {
       var inserted = false;
       for (var i = 0; i < storage[index].length; i++) {
         if (storage[index][i][0] === key){
           storage[index][i][1] = value;
           inserted = true;
         }
       }
       if (inserted === false) {
         storage[index].push([key, value]);
       }
     }
   }
   
   this.remove = function(key) {
     var index = hash(key, storageLimit);
     if (storage[index].length === 1 && storage[index][0][0] === key) {
       delete storage[index]
     } else {
       for (var i = 0; i < storage[index]; i++) {
         if (storage[index][i][0] === key) {
           delete storage[index][i];
         }
       }
     }
   };
   
   this.lookup = function(key) {
     var index = hash(key, storageLimit);
     if (storage[index] === undefined) {
       return undefined;
     } else {
       for (var i = 0; i < storage[index].length; i++) {
         if (storage[index][i][0] === key) {
           return storage[index][i][1];
         }
       }
     }
   }
   
 }