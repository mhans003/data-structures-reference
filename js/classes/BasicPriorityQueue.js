class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        //After pushing new value with priority, sort.
        this.sort();
    }
    dequeue() {
        //Return first item from queue.
        return this.values.shift();
    }
    sort() {
        //Sort values based on priority.
        this.values.sort((a, b) => a.priority - b.priority);
    }
}