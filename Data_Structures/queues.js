// Queues

/* Queues are first in first out. A good example of a queue is a line at a 
   cash register. The first person in line is the first person to be served.
   Another example is print jobs - the first print job requested gets printed
   first. */
   
// If we want to restrict Queues, we can write a function and use arrays:

function Queue () {
  collection = [];
  
  this.print = function () {
    console.log(collection);
  };
  
  this.enqueue = function (element) {
    collection.push(element);
  };
  
  this.dequeue = function (element) {
    // array.shift removes the first item of an array and returns it.
    return collection.shift();
  };
  
  this.front = function (element) {
    return collection[0];
  };
  
  this.size = function () {
    return collection.length;
  };
  
  this.isEmpty = function () {
    return (collection.length === 0);
  };
}

var q = new Queue;
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print() // ["a", "b", "c"]
q.dequeue(); // removes "a"
console.log(q.front()); // "b"
q.print(); // ["b", "c"]


// Priority Queues:
/* We can also make priority queues, which means that when you add an element 
   to the queue, you can also add a priority to it, which orders it. The queue
   is sorted by priority. If two elements have the same priority, the last added
   goes afterwards. */
// Priority queue is the same, just with a new enqueue function:

function PriorityQueue () {
  var collection = [];
  
  this.print = function() {
    console.log(collection);
  };
  
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) { //checks the priority of element vs the collection[index]'s priority
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) { // element priority is larger than existing priorities.
        collection.push(element);
      }
    }
  };
  
  // you can return either the element + priority or just the element.
  // here we return just the element
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  }
}
