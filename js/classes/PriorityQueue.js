class PriorityQueue {
    //Form of min binary heap
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        //Create new node with a priority level.
        let newNode = new priorityNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp() {
        //Keep track of current index, starting at the end.
        let index = this.values.length - 1;
        //Store the contents of the element we are bubbling upwards
        const movingElement = this.values[index];
        //As long as the index is greater than 0, continue bubbling up.
        while(index > 0) {
            //Find this element's parent.
            let parentIndex = Math.floor((index - 1) / 2);
            let parentElement = this.values[parentIndex];
            //If the element we are moving has a greater or equal priority value than the parent, stop bubbling up.
            if(movingElement.priority >= parentElement.priority) break;
            //Swap the elements
            this.values[parentIndex] = movingElement;
            this.values[index] = parentElement;
            //Move the current index up to the previous parent.
            index = parentIndex;
        }
    }
    dequeue() {
        //Save the min(first) and end values.
        const min = this.values[0];
        const end = this.values.pop();
        //As long as the array isn't empty, move the end to the beginning and begin bubbling down.
        if(this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        //Return the smallest (highest priority) value.
        return min;
    }
    bubbleDown() {
        //Keep track of the parent/current index.
        let index = 0;
        //Keep track of the length.
        const length = this.values.length;
        //Keep track of the item being moved downward.
        const movingElement = this.values[0];
        while(true) {
            //Get the current children of the current index.
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            //Keep track of child elements.
            let leftChild;
            let rightChild;
            //Keep track of whether a swap is made.
            let swap = null;
            //Make sure index isn't out of bounds.
            if(leftChildIndex < length) {
                //If it's a valid index, save the element at that index and compare.
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority < movingElement.priority) {
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length) {
                //If it's a valid index, save the element at that index.
                rightChild = this.values[rightChildIndex];
                //If a swap hasn't been set and right child has smaller priority value than moving element,
                //OR if a swap has been set BUT the right has smaller priority value than left child priority,
                //Then set/change swap to right child index.
                if(
                    (swap === null && rightChild.priority < movingElement.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }
            //If no swap was made, break out.
            if(swap === null) break;
            //Otherwise, it means we are using swap to perform the swap (the right or left index).
            this.values[index] = this.values[swap];
            this.values[swap] = movingElement;
            //Now, update the current index. 
            index = swap;
        }
    }
}