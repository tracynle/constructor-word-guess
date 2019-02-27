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
            // console.log("Guessed " + this.letter + " right");
        }
    };
}


module.exports = Letter;

