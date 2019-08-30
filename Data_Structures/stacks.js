/* Stacks */
// Stacks are Last In First Out

// EXAMPLES:
/* A stack of books is a great example of the data structure: stacks.
   If you have a stack of books, the topmost book is the book you put
   there last. The last book you put on top of the stack is the first
   book you take out of the stack. */
/* Another example of a stack is your browser's history. The last site
   visited is placed on top of the stack. When you press the back button,
   the last visited site is popped from the stack. */

// FUNCTIONS:
/* push, pop, peek, length */
// push: Add to the end of the stack
// pop: removes and returns the last element of the stack (topmost element)
// peek: Shows the last element of the stack (topmost element)
// length: Returns the size of the stack

/* The above functions are available on JavaScript arrays, so we can use
   Arrays as a stack, but we will also create a Stack Class */
   
// We will use an array stack to find a palindrome:

var letters = []; // This is our stack
var word = 'racecar';
var rword = '';

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + ' is a palindrome')
} else {
  console.log(word + ' is not a palindrome')
}

// Creates a stack
var Stack = function() {
  this.count = 0;
  this.storage = {};
  
  // Adds a value to the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  
  // Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  
  this.size = function() {
    return this.count;
  }
  
  // Returns the value at the end of the stacks
  this.peek = function(value) {
    return this.storage[this.count-1];
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())