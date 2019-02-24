// Letter.js: Contains a constructor, Letter. 
// This constructor should be able to either display an underlying character or a blank placeholder 
// (such as an underscore), depending on whether or not the user has guessed the letter. 

// That means the constructor should define:
    // A string value to store the underlying character for the letter
    // A boolean value that stores whether that letter has been guessed yet
    // A function that returns the underlying character if the letter 
        // has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    // A function that takes a character as an argument and checks it against the underlying character, 
        // updating the stored boolean value to true if it was guessed correctly

function Letter(value) {
    this.letter = value;
    this.guessed = false;

    // Returns one of three characters:
    //   Returns a space if the letter is a space.
    //   Returns the letter if it has been guessed.
    //   Returns underscore if no guess was made OR wrong guess was made.
    this.toString = function() {
        // Will show a space and will be considered as guessed
        if (this.letter === " ") {
            this.guessed = true;
            return " ";
        } 
        else {
            // If guessed is false, space will be filled with an underscore
            if (this.guessed) {
                return this.letter;
            }
            else {
                return "_";
            }
        }
    };

    this.guess = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    };
}

module.exports = Letter;

