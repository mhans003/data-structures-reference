class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new doubleNode(val);
        //If there isn't already an item in this list
        if(this.length === 0) {
            //Set the head and tail to the new node.
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Set the next property on the last node to have the new node instead of null.
            this.tail.next = newNode;
            //Make the new node's previous node be the one that is currently the tail.
            newNode.prev = this.tail;
            //Finally, set the tail to be the new node.
            this.tail = newNode;
        }
        //Increment the length and return the updated list.
        this.length++;
        return this;
    }

    pop() {
        //If there is no item, return.
        if(!this.head) return undefined;
        //Store/save the last item to be removed.
        let removedNode = this.tail;
        //If this is the only item, we want to set the head and tail to null.
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //If this isn't the only item, set the removed item's prev property to be the node before the last.
            this.tail = removedNode.prev;
            //Remove the old tail's next property (old reference to next Node)
            this.tail.next = null; 
            //Remove the removed item's prev value (reference to new tail)
            removedNode.prev = null;
        }
        //Decrement and return.
        this.length--;
        return removedNode;
    }
    shift() {
        //If there are no items, return.
        if(this.length === 0) return undefined;
        //Store current head property.
        let oldHead = this.head;
        //If there is only one item, set head and tail to null.
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //Make the new head (second item/the old head's 'next' property)
            this.head = oldHead.next;
            //Make the head's prev property null.
            this.head.prev = null;
            //Take the old head's next property away (null)
            oldHead.next = null;
        }
        //Decrement and return.
        this.length--;
        return oldHead;
    }
    unshift(val) {
        //Create new node.
        let newNode = new doubleNode(val);
        //If no items already, make this new node the head and tail
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Otherwise, insert into the front.
            //Make the current item now the second (prev is now the new node)
            this.head.prev = newNode;
            //Make the current head the new node's next.
            newNode.next = this.head;
            //Finally, make this new node the head.
            this.head = newNode;
        }
        //Increment and return.
        this.length++;
        return this;
    }
    get(index) {
        //If there is an index error, return.
        if(index < 0 || index >= this.length) return null;
        //If this index is in the first half, start at the beginning.
        let counter; 
        let currentNode;
        if(index < this.length / 2) {
            console.log('using begin')
            counter = 0;
            currentNode = this.head;
            while(counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
        } else {
            console.log('using end')
            //Otherwise, start at the end.
            counter = this.length - 1;
            currentNode = this.tail;
            while(counter > index) {
                currentNode = currentNode.prev;
                counter--;
            }
        }
        return currentNode;
    }
    set(index, newVal) {
        //Find the node at this location.
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = newVal;
            return true;
        } 
        return false;
    }
    insert(index, val) {
        //If there is an index error, return.
        if(index < 0 || index >= this.length) return false;
        //If we insert at beginning, just use unshift.
        if(index === 0) return !!this.unshift(val);
        //If we insert at end, just use push.
        if(index === this.length - 1) return !!this.push(val);
        //Otherwise, Create the new node.
        let newNode = new doubleNode(val);
        //Access the node that will come before this.
        let prevNode = this.get(index - 1);
        //Access the node that will come after this.
        let nextNode = prevNode.next;
        //Reconfigure next/prev links.
        //Set the values for the newNode.
        newNode.next = nextNode;
        newNode.prev = prevNode;
        //Set the values for the previous node and node coming after.
        prevNode.next = newNode;
        nextNode.prev = newNode;
        //Increment and return.
        this.length++;
        return true;
    }
    remove(index) {
        //If there is an index error, return.
        if(index < 0 || index >= this.length) return undefined;
        //Use shift if removing first.
        if(index === 0) return !!this.shift();
        //Use pop if removing last.
        if(index === this.length - 1) return !!this.pop();
        //Access item to be removed as well as the item before and after it.
        let removedNode = this.get(index);
        let leftNode = removedNode.prev;
        let rightNode = removedNode.next;
        //Change links between these nodes to remove the middle.
        leftNode.next = rightNode;
        rightNode.prev = leftNode;
        //Remove links from deleted node.
        removedNode.prev = null;
        removedNode.next = null;
        //Decrement and return.
        this.length--;
        return removedNode;
    }
    reverse() {
        //Swap the head and the tail, and save current head to current node.
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        //Keep track of the previous node and the next node.
        let prevNode = null;
        let nextNode;
        //Loop through each node
        for(let i = 0; i < this.length; i++) {
            //Store the node that will come next.
            nextNode = currentNode.next;
            //Swap the previous and next properties of the current node and next node.
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            //Update values (current node and next node) to iterate.
            prevNode = currentNode;
            currentNode = nextNode;
        }
        //Return reveresed node.
        return this;
    }
}