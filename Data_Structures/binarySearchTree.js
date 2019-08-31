// Binary Search Tree (BST)

/* A tree data structure is a way to hold data, that when visualized looks like
   a tree in nature. 
   
   NODES: All data points in the tree are called nodes.  
   ROOT NODE: First data point in the tree.
   PARENT: Nodes with children.
   SIBLINGS: Nodes with the same parent.
   LEAF NODES: End of the tree (no children)
   MIN HEIGHT: Distance from root node to first node without two children
   MAX HEIGHT: Distance from root node to the most bottom node
   BALANCED: If the difference between min height and max height are at most 1.
   
   Traversal Methods:
   inOrder Traversal, preOrder Traversal, postOrder Traversal, and levelOrder traversal. 
   
   inOrder Traversal: start at the left most node, and go to the right (all numbers in order)
   preOrder Traversal: explore root nodes before the leaves 
   postOrder Traversal: explores the leave nodes before the root nodes
   levelOrder Traversal: (Breadth First Search) Goes through each level (horizontally)
*/

/* A Binary Tree can only have TWO branches for each node. Binary search 
   trees are also ordered. Each left subtree is less than or equal to its parent,
   and each right subtree is greater than or equal to its parent.
   
   Because they are sorted, on average operations are able to skip half of the
   tree. Each lookup, insertion, or delete is Olog(n)
   
   Its faster than array, but slower than a hash table.
*/  

// BINARY SEARCH TREE:

class Node {
  constructor (data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor () {
    this.root = null;
  }
  
  add (data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  
  findMin () {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    
    return current.data;
  }
  
  findMax () {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    
    return current.data;
  }
  
  find (data) {
    let current = this.root;
    
    while (current) {
      
    }
  }
  
  isPresent (data) {
    let current = this.root;
    
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  
  remove (data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          node.null;
        }
        
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        
        // node has no right child
        if (node.right == null) {
          return node.left
        }
        
        // node has two children
        var tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() -1)
  }
  
  findMinHeight (node = this.root) {
    if (node === null) {
      // Height is -1 if binary tree is empty
      return -1
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  
  findMaxHeight (node = this.root) {
    if (node === null) {
      return -1
    };
    
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  
  inOrder () {
    if (this.root === null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder (node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
}