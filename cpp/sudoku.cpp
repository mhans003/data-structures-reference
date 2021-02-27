#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
    public:
    bool isValidSudoku(vector<vector<char>>& board) {
        bool validGame = true;
        //Row iterator
        vector<vector<char>>::iterator row;
        //Col iterator
        vector<char>::iterator col;

        //Test iterate through vector
        for(row = board.begin(); row != board.end(); ++row) {
            for(col = row->begin(); col != row->end(); ++col) {
                cout << *col << endl;
            }
        }
    
        //Iterate through row

        for(row = board.begin(); row != board.end(); ++row) {
            bool validRow = true;

            //Save numbers present in this row.
            vector<char> numbersPresent;
            for(col = row->begin(); col != row->end(); ++col) {
                if(*col != '.') {
                    //If this current char isn't .
                    char thisNumber = *col;
                    //compare this number to other numbers in row.
                    for(int i = 0; i < numbersPresent.size(); i++) {
                        if(thisNumber == numbersPresent.at(i)) {
                            validGame = false;
                            validRow = false;
                        }
                    }
                    //Put this number into the numbers in this row.
                    numbersPresent.push_back(thisNumber);
                }
            }
            cout << "Valid Row: " << validRow << endl;
        }

        //Iterate through columms
        for(int col = 0; col < board.size(); col++) {

            //By default, this column is OK
            int colOK = true;

            //Keep track of numbers in this column.
            vector<char> numbersPresent;

            for(int row = 0; row < board.size(); row++) {
                //Check if this current value is NOT a .
                char currentSquare = board.at(row).at(col);
                if(currentSquare != '.') {
                    //See if this is already in numbersPresent. If so, invalid
                    for(int i = 0; i < numbersPresent.size(); i++) {
                        if(currentSquare == numbersPresent.at(i)) {
                            validGame = false;
                            colOK = false;
                        }
                    }
                    //Put this number into numbers already in this column
                    numbersPresent.push_back(currentSquare);
                }
            }
            cout << "Valid Col: " << colOK << endl;
        }

        //Iterate through squares

        //Loop over 'main' rows
        for(int row = 0; row < board.size(); row += 3) {
            //Loop over 'main' cols
            for(int col = 0; col < board.size(); col += 3) {
                //By default, this is a valid square
                bool validSquare = true;
                //store values in this particular square
                vector<char> squareValues;

                //Loop over *actual* square rows
                for(int this_row = row; this_row < row + 3; this_row++) {
                    //Loop over *actual* square cols
                    for(int this_col = col; this_col < col + 3; this_col++) {
                        //Save current square
                        char currentSquare = board.at(this_row).at(this_col);
                        //If this isn't a period, check if already exists and put in squareValues
                        if(currentSquare != '.') {
                            cout << "Current square: " << currentSquare << endl;
                            //If there are any items in square values already, make sure this isn't already present
                            if(squareValues.size() > 0) {
                                for(int i = 0; i < squareValues.size(); i++) {
                                    if(currentSquare == squareValues.at(i)) {
                                        validSquare = false;
                                        validGame = false;
                                    }
                                }
                            }
                            squareValues.push_back(currentSquare);
                        }
                    }
                }
                cout << "Square starting at " << row << "," << col << " is valid: " << validSquare << endl;
            }
        }
        return validGame;
    }
    
};

int main()
{
    Solution solution1;

    vector<vector<char>> game {
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','4'},
        {'8','.','.','.','6','.','.','.','.'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','4','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','.'},
        {'.','.','.','.','8','.','.','7','9'}
    };

    solution1.isValidSudoku(game);
}