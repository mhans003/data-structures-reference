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
    depthFirstSearchRecursive(start) {
        //Keep track of all traversed items.
        let traversedNodes = [];
        //Keep track of visisted nodes.
        let visitedNodes = {};
        //'this' keyword will not work in helper function, so we need to store this.adjacencyList in adjacencyList.
        let adjacencyList = this.adjacencyList;
        //Immediately invoke first (recursive) call.
        (function search(vertex) {
            //Return if empty.
            if(!vertex) return null;
            //Mark this node as visited and push.
            visitedNodes[vertex] = true;
            traversedNodes.push(vertex);
            //Loop through every 'neighbor' of this vertex. Call this function if that neighbor is not visited.
            adjacencyList[vertex].forEach(neighbor => {
                if(!visitedNodes[neighbor]) {
                    //Go through this same process with this neighbor if not visited already.
                    return search(neighbor);
                }
            });
        })(start);
        //Return the traversed nodes.
        return traversedNodes;
    }
    depthFirstSearchIterative(start) {
        //Keep track of all traversed items.
        let traversedNodes = [];
        //Keep track of visisted nodes.
        let visitedNodes = {};
        //Stack helps keep track of vertices.
        let vertexStack = [];
        //Add the starting vertex to stack.
        vertexStack.push(start);
        //While there is something in the stack, loop over vertices/neighbors
        while(vertexStack.length) {
            //Get the next vertex.
            let thisVertex = vertexStack.pop();
            //If this vertex isn't already visited
            if(!visitedNodes[thisVertex]) {
                //Mark as visited
                visitedNodes[thisVertex] = true;
                //Add this to the results.
                traversedNodes.push(thisVertex);
                //Loop through this vertex's neighbors and add to stack.
                this.adjacencyList[thisVertex].forEach(neighbor => {
                    vertexStack.push(neighbor);
                });
            }
        }
        //At the end, return the results.
        return traversedNodes;
    }
}