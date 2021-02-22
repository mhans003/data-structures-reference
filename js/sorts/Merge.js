//Helper function to merge arrays
function mergeArrays(array1, array2) {

    document.getElementById("steps").innerHTML += `<li>Now merging ${array1} and ${array2}</li>`;

    let index1 = 0;
    let index2 = 0;
    let mergedArray = [];
    //While there are elements left in both arrays, begin comparing each element.
    while(index1 < array1.length && index2 < array2.length) {
        if(array1[index1] < array2[index2]) {
            mergedArray.push(array1[index1]);
            index1++;
        } else {
            mergedArray.push(array2[index2]);
            index2++
        }
    }

    //Then, with which ever array still has elements, push the rest of the elements.
    while(index1 < array1.length) {
        mergedArray.push(array1[index1]);
        index1++
    }

    while(index2 < array2.length) {
        mergedArray.push(array2[index2]);
        index2++
    }

    //Finally, return the merged array.
    return mergedArray;
}

function mergeSort(array) {     
    if(array.length <= 1) {
        //Once the array is a single item, return.
        document.getElementById("steps").innerHTML += `<li>Now unwinding recursion with ${array}</li>`;
        return array;
    }

    document.getElementById("steps").innerHTML += `<li>Now sorting ${array}</li>`;

    //Find the midpoint to split this array recursively.
    let midpoint = Math.floor(array.length / 2);

    //Call this function passing in the sub arrays.
    let left = mergeSort(array.slice(0, midpoint));
    let right = mergeSort(array.slice(midpoint));
    
    //Return the arrays (halves) merged.
    return mergeArrays(left, right);
}