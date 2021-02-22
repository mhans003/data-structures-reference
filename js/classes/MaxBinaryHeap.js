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
}