class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(val) {
        this.values.push(val);
        //Shuffle as needed.
        this.bubbleUp();
        return this.values;
    }
    bubbleUp() {
        //Initiate the index to the end of the values array.
        let index = this.values.length - 1;
        //Store reference to the parent index.
        let parentIndex = Math.floor((index - 1) / 2);
        //As long as the item at the parent index is smaller, bubble up.
        while(this.values[parentIndex] < this.values[index]) {
            //Swap the values.
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            //Update the index to be the index of this parent to compare to the next parent.
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }
    extractMax() {
        //Take the largest value and store in max.
        let max = this.values[0];
        //Remove the last element from the array.
        let end = this.values.pop();
        //Place the last element into the beginning of the array.
        //Only perform this block if the array is not empty.
        if(this.values.length > 0) {
            this.values[0] = end;
            //Rearrange the array to make sure order is correct.
            this.bubbleDown();
        }
        //Return the max value.
        return max;
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
                if(leftChild > movingElement) {
                    swap = leftChildIndex;
                }
            }
            if(rightChildIndex < length) {
                //If it's a valid index, save the element at that index.
                rightChild = this.values[rightChildIndex];
                //If a swap hasn't been set and right child is greater than the parent,
                //OR if a swap has been set BUT the right child is greater than the left child,
                //Then set/change swap to right child index.
                if(
                    (swap === null && rightChild > movingElement) ||
                    (swap !== null && rightChild > leftChild)
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