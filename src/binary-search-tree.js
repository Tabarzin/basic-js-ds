const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.root1 = null;
  }

  root() {
   return this.root1;
  }

  add(data) {
    this.root1 = addWithin(this.root1, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    
  

    let current = this.root1;
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


  

  find(data) {
    
    if(!this.root1) return false
      
    let current = this.root1
    let found = false
    while(current && !found){
          if(data < current.data){
            current = current.left
           } else if(data > current.data){
              current = current.right
           } else {
                found = current
           } 
          
          }
  
      if(!found) return null;
      return found
    

}
  
remove(data) {
  const removeNode = function(node, data) {
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      
      if (node.left == null && node.right == null) {
        return null;
      }
      
      if (node.left == null) {
        return node.right;
      }
      
      if (node.right == null) {
        return node.left;
      }
      
      let tempNode = node.right;
      while (tempNode.left !== null) {
        tempNode = tempNode.left;
      }
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  }
  this.root1 = removeNode(this.root1, data);
}


min() {
  
    let current = this.root1;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }


  


   max() {
   
    let current = this.root1;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
  }

  



  
}

module.exports = {
  BinarySearchTree
};