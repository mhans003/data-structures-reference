//Define Singly Linked List
class SinglyLinkedList {
    constructor() {
        //By default, head/tail are null and length is 0.
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        //Create new node.
        let newNode = new simpleNode(val);
        //If this is the first, set it to be head and tail.
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //Otherwise, have the previous tail node's next property point to this and make this the new tail.
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //Increment length.
        this.length++;
        //Return the updated list.
        return this;
    }
    pop() {
        //If there are no items, return.
        if(!this.head) return undefined;
        //Keep track of current node and second-to-last (to create new tail)
        let currentNode = this.head;
        let newTail = currentNode;
        //While the end has not yet been reached, traverse list.
        while(currentNode.next) {
            //Update the nodes we are keeping track of.
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        //The new tail will now be the second-to-last node, and it has no next node.
        this.tail = newTail;
        this.tail.next = null;
        //Decrement length.
        this.length--;
        //If we have cleared the list, set the head and tail to null.
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        //Return the now removed node.
        return currentNode;
    }
    shift() {
        //If there are no items, return.
        if(!this.head) return undefined;
        //Save the current head to be returned.
        let currentHead = this.head;
        //Save the second item as the new head.
        this.head = currentHead.next;
        //Decrement length.
        this.length--;
        //If there are no items, make sure tail is also null.
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        //Create the new node.
        let newNode = new simpleNode(val);
        //If there are no items in the list, set this as head and tail.
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //Otherwise, take the old head and make it the new head's next property.
            newNode.next = this.head;
            //Make the new node the new head.
            this.head = newNode;
        }
        //Increment the list and return updated list.
        this.length++;
        return this;
    }
    get(index) {
        //Return if the index number is invalid.
        if(index < 0 || index >= this.length) return null;
        //Establish counter and initial current node as the head.
        let counter = 0;
        let currentNode = this.head;
        //Loop through each node until we reach the correct index.
        while(counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        //Return the node at the correct index.
        return currentNode;
    }
    set(index, newVal) {
        //Use the get method to find the node.
        let node = this.get(index);
        if(!node) {
            return false;
        } else {
            //If it's found, set its new value.
            node.val = newVal;
            return true;
        }
    }
    insert(index, val) {
        //Return if there is an index error.
        if(index < 0 || index > this.length) return false;
        //Use push method instead if inserting at end (force boolean return with !!).
        if(index === this.length) return !!this.push(val);
        //Use unshift method instead if inserting at beginning (force boolean return).
        if(index === 0) return !!this.unshift(val);
        //Otherwise, follow insert logic.
        //Create new node and save previous node.
        let newNode = new simpleNode(val);
        let prevNode = this.get(index - 1);
        //Keep track of the previous node's next property.
        let prevNext = prevNode.next;
        //Rearrange the connections between nodes.
        prevNode.next = newNode;
        newNode.next = prevNext;
        //Increment length and return true.
        this.length++;
        return true;
    }
    remove(index) {
        //Return if there is an index error.
        if(index < 0 || index >= this.length) return undefined;
        //Use pop instead if removing last item.
        if(index === this.length - 1) return !!this.pop();
        //Use shift instead if removing first item.
        if(index === 0) return !!this.shift();
        //Otherwise, follow logic to remove an item.
        //Access the node immediately before the target index and store node to be deleted.
        let prevNode = this.get(index - 1);
        let deletedNode = prevNode.next;
        //Change the links between nodes.
        prevNode.next = deletedNode.next;
        //Decrement length and return removed node.
        this.length--;
        return deletedNode;
    }
    reverse() {
        //Swap the head and the tail, and set current node to the current head.
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        //Keep track of previous and next node.
        let prevNode = null;
        let nextNode;
        //Loop through each item.
        for(let i = 0; i < this.length; i++) {
            //Save the current next node.
            nextNode = currentNode.next;
            //For the current node, update the current node's next property.
            currentNode.next = prevNode;
            //Update previous node and current node.
            prevNode = currentNode;
            currentNode = nextNode;
        }
        //Return reveresed node.
        return this;
    }
    print() {
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}