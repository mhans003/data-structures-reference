//Custom Stack (consists of nodes)
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        //Initialize new empty stack.
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //Push an item to the end.
    push(val) {
        let newNode = new Node(val);
        //If this stack is empty
        if(!this.first) {
            //Set this node to be the first and last
            this.first = newNode;
            this.last = newNode;
        } else {
            //Otherwise, store the current first property.
            let currentFirst = this.first;
            //Reset the first property to be the new node instead.
            this.first = newNode;
            //Set the new first node to have the currentFirst (old first) as its new next property.
            this.first.next = currentFirst;
        }
        //Increment the size and return the current size of the stack.
        return ++this.size;
    }
    //Remove an item from the end.
    pop() {
        //If there aren't any nodes, return null.
        if(!this.first) return null;
        //Store the first property (first node) on the stack.
        let currentFirst = this.first;
        //If this is the only item in the list, set the first and last properties to null.
        if(this.first === this.last) {
            this.last = null;
        } 
        //Make the second item the new first.
        this.first = this.first.next;
        //Decrement and return the removed node.
        this.size--;
        return currentFirst.val;
    }
    print() {
        let items = "";
        let currentNode = this.first;
        for(let i = 0; i < this.size; i++) {
            items += ` ${currentNode.val} `;
            currentNode = currentNode.next;
        }
        return items;
    }
}