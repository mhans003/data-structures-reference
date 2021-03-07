//Helper function to handle getting a digit from a certain place (0 will be the ones; 1 the tens and so on)
function getDigit(number, exponent) {
    //Math.abs(number) will ensure this is positive
    //Dividing by Math.pow(10, exponent) moves the decimal over to the correct exponent
    //Mathl.floor will eliminate the decimal fractions remaining
    //returning the remainder will isolate the single digit in the exponent we want
    return Math.floor(Math.abs(number) / Math.pow(10, exponent)) % 10;
}

//Helper function returns number of digits in a number
function digitCount(number) {
    //If the number is 0, just return 1 digit long
    if(number === 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

//Helper function determines what the greatest number of digits is in the array
function mostDigits(numbers) {
    //Set default for the max number of digits.
    let maxDigits = 0;
    //Loop through every number.
    for(let index = 0; index < numbers.length; index++) {
        //See which is larger, current maxDigits or the number at this index.
        maxDigits = Math.max(maxDigits, digitCount(numbers[index]));
    }
    return maxDigits;
}

function radixSort(numbers) {
    //Get the largest number of digits amongst all the numbers
    let maxDigitCount = mostDigits(numbers);

    //For every 'exponent' (power of 10 up to the max)
    for(let exponent = 0; exponent < maxDigitCount; exponent++) {
        //Create the different 'buckets' (base 10) to place numbers in for this iteration
        let digitBuckets = Array.from({length: 10}, () => []);
        //Loop through every number.
        for(let index = 0; index < numbers.length; index++) {
            //For this number, get the digit at the current 'exponent'
            let digit = getDigit(numbers[index], exponent);
            //At the correct 'bucket', insert this number
            digitBuckets[digit].push(numbers[index]);
        }
        //Put the numbers back together
        numbers = [].concat(...digitBuckets);
    }
    return numbers;
}