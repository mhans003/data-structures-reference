class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        //In this case, we are keeping track of how many instances of this value exist.
        this.count = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        //Create new node
        let newNode = new Node(val);
        //If there isn't already a root, make this the root.
        if(this.root === null) {
            this.root = newNode;
            //Return the current tree.
            return this;
        } else {
            //Keep track of current node(current 'parent')
            let currentNode = this.root;
            //Loop while we haven't found the correct spot for the new node.
            while(true) {
                //If this value is less than the 'current' value
                if(val < currentNode.val) {
                    //We know it will go to left.
                    if(currentNode.left === null) {
                        //If there isn't already a left node, this is where we place this node.
                        currentNode.left = newNode;
                        //Exit this loop.
                        return this;
                    } else {
                        //If there is already a node on the left, we want to repeat the proces on the next left child node
                        currentNode = currentNode.left;
                    }
                } else if(val > currentNode.val) {
                    //Otherwise, we know this value is greater than the 'current' value and will go on the right.
                    if(currentNode.right === null) {
                        //If there isn't already a right node, this is the place where we want this node.
                        currentNode.right = newNode;
                        //Exit this loop.
                        return this;
                    } else {
                        //If there is already a node on the right, we want to repeat the process on the next right child node.
                        currentNode = currentNode.right;
                    }
                } else {
                    //If this value is equal to the current node's value, simply increment the count of the current node.
                    currentNode.count++;
                    return this;
                }
            }
        }
    }
    find(val) {
        //If there aren't any nodes, return.
        if(this.root === null) return false;
        //Otherwise, keep track of current node and whether the desired value is found
        let currentNode = this.root;
        let found = false;
        //While there is a node to search and while we haven't yet found the value, repeat
        while(currentNode && !found) {
            //If the value we are looking for is less than the current node's value, //move to this node's left node.
            if(val < currentNode.val) {
                currentNode = currentNode.left;
            } else if(val > currentNode.val) {
                //If it is greater, move to the right node that comes next.
                currentNode = currentNode.right;
            } else {
                //If it is equal, we have found it.
                found = true;
            }
        }
        //If we broke out of the loop without finding it, return undefined.
        if(!found) return undefined;
        //Return the found node (stored in currentNode);
        return currentNode;
    }
    contains(val) {
        //Same as find, except returns true/false value.
        if(this.root === null) return false;
        let currentNode = this.root;
        let found = false;
        while(currentNode && !found) {
            if(val < currentNode.val) {
                currentNode = currentNode.left;
            } else if(val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    } 
}