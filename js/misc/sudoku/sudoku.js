const isValidSudoku = (board) => {
    //By default, the game is valid.
    validGame = true;

    //Run test to ensure rows are OK
    board.forEach(row => {
        let rowOK = true;
        row.forEach((char, index) => {
            if(char !== ".") {
                let thisNumber = char;
                for(let i = 0; i < row.length; i++) {
                    if(row[i] !== ".") {
                        console.log(`Comparing ${thisNumber} to ${row[i]}`)
                        if(thisNumber === row[i] && i !== index) {
                            //rowOK is just for console.log reference.
                            rowOK = false;
                            //Invalid game.
                            validGame = false;
                        }
                    }
                }
            }
        })
        console.log(`The row ${row} is valid: ${rowOK}`);
    });

    //Run test to ensure columns are OK
    for(let j = 0; j < board.length; j++) {

        //By default, this column is OK
        let colOK = true;
        //Keep track of numbers already in this col
        let squareValues = [];

        for(let i = 0; i < board.length; i++) {
            //Check if this current value is NOT a "."
            let currentSquare = board[i][j];
            if(currentSquare !== ".") {
                //See if this value is already in squareValues. If so, this is not a valid column.
                squareValues.forEach(storedValue => {
                    if(storedValue === currentSquare) {
                        //colOK is just for console reference.
                        colOK = false;
                        //Invalid game.
                        validGame = false;
                    }
                });
                //Store this value in the squareValues array (it already exists in the square).
                squareValues.push(currentSquare);
            }
        }

        console.log(`The column starting at 0,${j} is valid: ${colOK}`);
    }

    //Run test to ensure squares are OK

    //We want to do 9 loops in all
    //on first loop, i will start 0; second i start 3; third i start 6
    //at the end of each large loop, we i += 3
    //This loop goes over the 'main' rows (3 of these in all)
    for(let i = 0; i < board.length; i +=3 ) {
        
        //For each of these loops, we will loop three times
        //i will stay 0 at each start, but will be assigned to i_prime
        //i_prime must never go larger than i + 2, but will increment i_prime++

        //This will loop over the 3 'starter j' for each row
        for(let j = 0; j < board[i].length; j += 3) {

            //By default, this square is valid
            let validSquare = true;
            //Store the values in the particular square.
            let squareValues = [];

            //This will loop over the *actual* square
            for(let i_prime = i; i_prime < i + 3; i_prime++) {
                //For each of these loops, j_prime will start at j
                for(let j_prime = j; j_prime < j + 3; j_prime++) {
                    //Get the current square
                    let currentSquare = board[i_prime][j_prime];

                    //If this is not a period, put this in the squareValues array.
                    if(currentSquare !== ".") {
                        console.log('Current Square: ' + currentSquare);
                        //If there are any items in square values already, make sure it isn't already present
                        if(squareValues.length) {
                            squareValues.forEach(storedSquare => {
                                if(currentSquare === storedSquare) {
                                    //validSquare is for reference in the console.
                                    validSquare = false;
                                    //Invalid game.
                                    validGame = false;;
                                }
                            });
                        }
                        //Now, store this current square in squareValues.
                        squareValues.push(currentSquare);     
                    }
                }
            }
            console.log(`Square starting at ${i},${j} is valid: ${validSquare}`);
        }
    }
    return validGame;
};

module.exports = isValidSudoku;
