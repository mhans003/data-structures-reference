function insertionSort(arr) {
    //Loop through each item in the array, starting at second.
    for(let currentIndex = 1; currentIndex < arr.length; currentIndex++) {
        //Save the current value
        let currentVal = arr[currentIndex];

        //Loop through each item in the sorted portion, as long as the current value in the current sorted index is greater than the current value.
        for(var sortedIndex = currentIndex - 1; sortedIndex >= 0 && arr[sortedIndex] > currentVal; sortedIndex--) {
            document.getElementById("steps").innerHTML += `<li>shifting ${arr[sortedIndex]} into spot where ${arr[sortedIndex + 1]} is</li>`;
            //Push the item being looked at from sorted index into the next spot over.
            arr[sortedIndex + 1] = arr[sortedIndex];
        }
        document.getElementById("steps").innerHTML += `<li>Finally, putting ${currentVal} into where ${arr[sortedIndex + 1]} is</li>`;
        //Once we are finished looking through the sorted portion, place the current value into the next spot after stopping.
        arr[sortedIndex + 1] = currentVal;
    }

    return arr;
}