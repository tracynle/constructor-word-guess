var Word = require("./Word.js");
var inquirer = require("inquirer");

// Set up the variables that holds all the letters in an array
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Holds artist's names that are to be to guessed for the game  
var artistsNames = [
    "leonardo da vinci",
    "pablo picasso",
    "salvador dali",
    "frida kahlo",
    "georgia o keeffe",
    "andy warhol"
];

// Define a variable that will hold the word being guessed
var currentWord;

// Set remaining guesses
var guesses = 10;

// Create a function that will select a random word for the user to guess
function selectWord() {
    var randomNumber0to1 = Math.random();
    var randomDecimal = randomNumber0to1 * artistsNames.length;
    var randomIndex = Math.floor(randomDecimal); 
    currentWord = new Word(artistsNames[randomIndex]);
}

selectWord();

// Create a function to prompt the user to guess letters from A to Z
function prompt() {
    // storing the promise
    var promise = inquirer.prompt([{
        type: "input",
        name: "userInput",
        message: "Guess a letter from A to Z. "
    }]);
    
    promise.then(function(letter) {
        // Once the user inputs a letter, we need to check if they guessed the right letters
        // Return value will tell you if something was matched 
        // 'letter.userInput' has a property from the argument provided to prompt the user to guess
        var letterMatched = currentWord.userGuess(letter.userInput);
        // Call .log to display letters or underscore after user has guessed it right or wrong
        currentWord.log();
        // deduct remaining guesses if guess is false
        if (letterMatched === false) {
            guesses--;
        }
        console.log("You have " + guesses + " left.");
        if (guesses === 0) {
            console.log("You lose! Game Over! :( ");
            restartGame();
        }
        else {
            if (currentWord.solved() === true) {
                console.log("You win!! You know your Art History * ^__^ * ");
                restartGame();
            }
            else {
                prompt();
            }
        }
    })
}
prompt();

function restartGame () {
    // Restart game by resetting back to 10 tries
    inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to:",
        choices: ["Play Again", "Exit"],
        name: "restart"
      }
    ])
    .then(function(input) {
      if (input.restart === "Play Again") {
        guesses = 10;
        selectWord();
        prompt();
    } else {
        return;
    }
    });
}