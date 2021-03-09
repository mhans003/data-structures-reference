function shellSort(array) {
    //This is the distance between two elements being compared
    let increment = array.length / 2;

    //While there is a distance between elements
    while(increment > 0) {
        //Loop through the elements (to compare to element at distance of increment)
        for(let index = increment; index < array.length; index++) {

            //Store index value in second index to use as reference to other element
            let j = index;

            //Create a temporary storage of this current element at index
            let temp = array[index];

            //While the other index is greater/equal to current index 
            //AND second element being referred to is larger than the temp variable
            while(j >= increment && array[j - increment] > temp) {
                console.log(`IN INNER WHILE LOOP`)
                //Swap the elements
                //Element at the otehr index is now 
                console.log(`${array[j]} is now ${array[j - increment]}`)
                array[j] = array[j - increment];
                j -= increment;
            }

            //Put the temp variable in the location of the second index
            console.log(`${array[j]} is now ${temp}`)
            array[j] = temp;

        }

        //If the increment has reached two, make it one.
        if(increment === 2) {
            increment = 1;
        } else {
            //Otherwise, cut down the increment value
            increment = parseInt(increment * 5 / 11);
        }

    }

    return array;
}