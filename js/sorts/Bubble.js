function bubbleSort(arr) {
    //This will be set when a swap is made 
    var noSwaps;

    //Loop through every item starting at the end.
    for(let endOfCompare = arr.length; endOfCompare > 0; endOfCompare--) {
        //Assume this has no swaps made.
        noSwaps = true;
        //Loop through every unsorted item, starting at beginning, until the sorted section starts.
        for(let currentPlace = 0; currentPlace < endOfCompare - 1; currentPlace++) {
            //Identify the 'next' place
            nextPlace = currentPlace + 1;
            //If the current place is greater than the next place, we want to switch them (bubble it up)
            if(arr[currentPlace] > arr[nextPlace]) {
                //console.log(`checking ${arr[currentPlace]} and ${arr[nextPlace]}`);
                let temp = arr[currentPlace];
                arr[currentPlace] = arr[nextPlace];
                arr[nextPlace] = temp;
                //There has been at least one swap, so we don't want to break out of this quite yet.
                noSwaps = false;
            }
        }
        //Break out of this loop if no swaps made to prevent going through further (already sorted)
        if(noSwaps) break;
    }
    return arr;
}