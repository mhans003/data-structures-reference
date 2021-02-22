class HashTable {
    //By default, set hash table to 53 elements long.
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    //Works for strings only (lowercase alpha)
    //Not constant time - operations scale as input key increases in size
    _simpleHash(key) {
        let total = 0;
        //Loop through every character in the input key.
        for(let char of key) {
            //Subtract 96 from char chode to get position in alphabet.
            let value = char.charCodeAt(0) - 96;
            //Add this value to the total, then divide by the array length and return the remainder.
            //This ensures that array index does not exceed array length.
            total = (total + value) % this.keyMap.length;
        }
        return total;
    }
    //Improved simple hash 
    //Using prime numbers allows distribution in array to improve (fewer collisions)
    //Limits number of operations performed if input key is very large.
    //Still only takes in lowercase alpha characters
    _improvedSimpleHash(key) {
        let total = 0;
        //Using prime number in calculation of 'total' improves distribution in array.
        const PRIME = 31;
        //Prevent too many operations by reducing loops if input key length exceeds 100.
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        //Use a hash function to get an index where the value will be stored.
        let index = this._improvedSimpleHash(key);
        if(!this.keyMap[index]) {
            //If this spot is not already taken up, make this the first item in that spot.
            this.keyMap[index] = [];
        }
        //Regardless, this item will be pushed to the array at this location.
        this.keyMap[index].push([key, value]);
        //Return the array.
        return this.keyMap;
    }
    get(key) {
        //Get the index to search from.
        let index = this._improvedSimpleHash(key);
        //Check if there is anything at this index.
        if(this.keyMap[index]) {
            //If item(s) are found at this location, look for the one that has the correct key (if available).
            for(let i = 0; i < this.keyMap[index].length; i++) {
                //See if key at each location matches the input key.
                if(this.keyMap[index][i][0] === key) {
                    //Return the value at that location.
                    return this.keyMap[index][i][1];
                }
            }
        }
        //If nothing is found, return undefined.
        return undefined;
    }
    keys() {
        //Returns all keys
        let valuesArray = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            //If there is at least one item at this location, loop through all items there.
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    //Push the key at this location.
                    valuesArray.push(this.keyMap[i][j][0]);
                }
            }
        }
        return valuesArray;
    }
    keysUnique() {
        //Returns all unique keys
        let valuesArray = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            //If there is at least one item at this location, loop through all items there.
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    //Push the key at this location IF not already in the array.
                    if(!valuesArray.includes(this.keyMap[i][j][0])) {
                        valuesArray.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return valuesArray;
    }
    values() {
        //Returns all values
        let valuesArray = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            //If there is at least one item at this location, loop through all values there.
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    //Push the value at this location.
                    valuesArray.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valuesArray;
    }
    valuesUnique() {
        //Returns all unique values
        let valuesArray = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            //If there is at least one item at this location, loop through all values there.
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    //Push the value at this location IF not already in the array.
                    if(!valuesArray.includes(this.keyMap[i][j][1])) {
                        valuesArray.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArray;
    }

}