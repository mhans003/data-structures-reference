function selectionSort(arr) {
    //Loop through current positions
    for(let startOfCompare = 0; startOfCompare < arr.length; startOfCompare++) {
        //Get starting min value (assume the first index of this round)
        let startingMin = startOfCompare;
        //This min value is the index OF the current min value.
        let minIndex = startingMin;
        //Loop through next positions
        for(let nextPlace = startOfCompare + 1; nextPlace < arr.length; nextPlace++) {
            //Compare the start position value to the next value being compared
            //If smaller, set it as a new min.
            if(arr[nextPlace] < arr[minIndex]) {
                minIndex = nextPlace;
            }
        }
        //If a smaller number was found (minValue is not the same), swap values.
        if(startingMin !== minIndex) {
            document.getElementById("steps").innerHTML += `<li>Swapping ${arr[startingMin]} at index ${startingMin} with ${arr[minIndex]} at index ${minIndex}</li>`;
            let temp = arr[startingMin];
            arr[startingMin] = arr[minIndex];
            arr[minIndex] = temp;
            //ES6:
            //[arr[startingMin], arr[minIndex]] = [arr[minIndex], arr[startingMin]];
        }
    }
    return arr;
}