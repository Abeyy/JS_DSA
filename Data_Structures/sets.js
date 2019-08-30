// Sets

/* Sets are like arrays, but they cant have any duplicate items, and are in
   no particular order. */

/* Typically sets are used to make sure there are no repeating elements. */

/* ES6 has a built in Set object, but that implementation does not have all
   the common functions for Sets so you may have to implement custom functions. 
*/

/*ES6 Set has the following functions: has, values, add, delete */

function mySet() {
  // the var collection will hold the set:
  var collection = [];
  
  // Returns true if element exists in collection already 
  this.has = function(element) {
    return (collection.indexOf(element) !== -1)
  };
  
  // Returns all the values in the set
  this.values = function() {
    return collection;
  };
  
  // Adds an element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  
  // Removes an element from the set
  this.remove = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };
  
  // this method will return the size of the collection
  this.size = function() {
    return collection.length;
  };
  
  // NON ES6 METHODS: 
  // this method will return the union of two sets
  this.union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.value();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e)
    });
    secondSet.forEach(function(e) {
      // NOTE: Remember that the add function checks for duplicates!
      unionSet.add(e);
    });
    return unionSet;
  };
  
  // Returns the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    
    return intersectionSet;
  }
  
  // Returns the difference of two sets as a new set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    
    return differenceSet;
  };
  
  // Returns if the set is a subset of a different set
  this.subset = function(otherSet) {
    var firstSet = this.values;
    firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("a");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values);

// ES6 Way:
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");

// Returns an "object Set Iterator to iterate over"
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a")); // false
console.log(setD.add("d")); // returns the set itself, not true or false.