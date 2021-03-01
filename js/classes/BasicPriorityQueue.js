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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        //If this vertex doesn't already exist, add to adjacency list.
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2, weight) {
        //If these vertices exist, add the edge/connection with the weight to each vertex
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push({
                node: vertex2,
                weight
            });
            this.adjacencyList[vertex2].push({
                node: vertex1,
                weight
            })
        }
    }
    //Find quickest route between nodes
    DijkstraAlgorithm(start, finish) {
        //Create a priority queue of nodes.
        const nodes = new PriorityQueue();
        //Keep track of distances and previous
        const distances = {};
        const previous = {};
        //This is the path (shortest path) that will be returned.
        let path = [];
        //Keep track of smallest path
        let smallest;
        //Build initial state
        //Loop over every vertex in this adjacency list
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                //If this is where we want to start, set distances to 0
                distances[vertex] = 0;
                //Enqueue this node with high priority.
                nodes.enqueue(vertex, 0);
            } else {
                //Otherwise (not first), set initial distance and priority of this next node to infinity 
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        //As long as there is another node to visit in the priority queue
        while(nodes.values.length) {
            //Get the next node in the queue and set its value to smallest
            smallest = nodes.dequeue().val;
            //If the smallest is the same as the end
            if(smallest === finish) {
                //This means we are at the end
                //Construct the path to return
                while(previous[smallest]) {
                    //While there is still a next smallest previous node
                    //Push that smallest distance and go to the next smallest
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                //We are done, so break out.
                break;
            }
            //If we are not at the end.
            if(smallest || distances[smallest] !== Infinity) {
                //Loop through every neighbor in the node at the shortest distance
                for(let neighbor in this.adjacencyList[smallest]) {
                    //Find the neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //Calculate new distance to neighbor
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    //If this 'candidate' is smaller than the 'next' distance
                    if(candidate < distances[nextNeighbor]) {
                        //Update new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //Update previous - How we got to this neighbor
                        previous[nextNeighbor] = smallest;
                        //Enqueue in priority queue with the new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}