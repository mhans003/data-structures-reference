class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        //Create new node.
        let newNode = new simpleNode(val);
        //If there are no nodes already
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            //Otherwise, insert the new node behind the current last node.
            this.last.next = newNode;
            this.last = newNode;
        }
        //Return the current (new) size
        return ++this.size;
    }
    dequeue() {
        //Return if empty
        if(!this.first) return null;
        //Store current first property.
        let currentFirst = this.first;
        //See if there is only one node. If so, we now want last to be null.
        if(this.first === this.last) {
            this.last = null;
        } 
        //Otherwise, set the first property to be the next property of first (take out the first node)
        this.first = this.first.next;
        //Decrement and return removed node
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