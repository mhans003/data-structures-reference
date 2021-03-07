//Pivot Helper Function - Returns correct index of where pivot element should go
//Takes in array, start/end indexes
function pivot(array, start = 0, end = array.length - 1) {
    //Sub function that will be used to swap two elements
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };

    //Use first element in array by default as pivot element.
    let pivot = array[start];

    //Keep track of the index we want to return (where pivot should go)
    let swapIndex = start;

    //Loop through every element after the pivot
    for(let currentIndex = start + 1; currentIndex <= end; currentIndex++) {
        //See if pivot is greater than this element
        if(pivot > array[currentIndex]) {
            console.log(`pivot ${pivot} is greater than ${array[currentIndex]}`)
            //If so, count up the number of items less than the pivot.
            swapIndex++;
            //Swap 
            console.log(`Swapping ${array[swapIndex]} at index ${swapIndex} with ${array[currentIndex]} at index ${currentIndex}`);
            swap(array, swapIndex, currentIndex);
        }
        console.log(`Array is now ${array}`)
    }

    //After looping through all elements
    //Swap the pivot element from start to the correct spot.
    console.log(`Finally, swapping ${array[start]} at index ${start} with ${array[swapIndex]} at index ${swapIndex}`);
    swap(array, start, swapIndex);
    console.log(`Final array: ${array}`)
    return swapIndex;
}