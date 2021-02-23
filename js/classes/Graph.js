class undirectedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        //Since vertex is the key, set it to an empty array within the list object.
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    //Edges = Connections
    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            //Find key of vertex1 (add vertex2)
            this.adjacencyList[vertex1].push(vertex2);
            //Find key of vertex2 (add vertex1)
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        //Remove each vertex from other vertex array (return new array/reassign using filter)
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
        }
    }
    //Remove a vertex and all its edges
    removeVertex(vertex) {
        //Make sure this vertex exists
        if(this.adjacencyList[vertex]) {
            //For every key in the list object
            for(let key in this.adjacencyList) {
                //See if this key is the vertex we want to delete
                if(key === vertex) {
                    //If so, remove it
                    delete this.adjacencyList[key];
                } else {
                    //Otherwise, loop through the array at this location and delete reference to the vertex we want to delete
                    this.adjacencyList[key] = this.adjacencyList[key].filter(thisVertex => thisVertex !== vertex);
                }
            }
        }
    }
}