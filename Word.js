var Letter = require("./letter.js");

// Create an object array 

function Word(answer) {
    // Start with an object array
    this.letters = [];

    // Create a for loop that will push the letter to the object array
    // Result of <letters> after for loop: [new Letter('p'), new Letter('a'), ...]
    for (var i = 0; i < answer.length; i++){
        var letter = new Letter(answer[i]);
        this.letters.push(letter);
    }

    // create the log function that will display the data in the terminal
    this.log = function() {
        var answerLog = "";
        for (var i = 0; i < this.letters.length; i ++) {
            answerLog += this.letters[i].toString() + " ";
        }
        console.log(answerLog + " \n\n");
    };

    this.userGuess = function(letter) {
        var matches = 0;
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].guess(letter);
            if (this.letters[i].guessed === true && this.letters[i].letter !== " ") {
                matches++;
            }
        }
        console.log(matches);
        if (matches === this.letters.length) {
            return true;
        }
        else {
            return false;
        }
    };

    this.solved = function() {
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guessed === false) {
                return false;
            }
        }
        return true;
    }
}


module.exports = Word;