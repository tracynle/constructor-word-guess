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
    "georgia o'keeffe",
    "andy warhol"
];

// set a boolean to false for the requiredNewWord
var requiredNewWord = false;
// Make an array for incorrect letters 
var incorrectLetters = [];
// Make an array for correct letters
var correctLetters = [];
// Set the guesses left to 10
var guessesLeft = 10;

// Make a function with a condition that will handle all the logic with an if statement
// The logic of this function goes as follows:
    // The randomIndex will go through the loop of letters using Math.floor and Math.random 
    // and the randomWord will run through the list of artistsNames at random as well
function theLogic() {
// Generates new word for Word constructor if true
    if (requireNewWord) {
        // Selects random UnitedStates array
        var randomIndex = Math.floor(Math.random() * artistsNames.length);
        var randomWord = artistsNames[randomIndex];

    }
    // Remaining guesses 
    // set up inquirer function that prompts for the letter. promptForLetter
    if (wordComplete.includes() == true) {
        inquirer.prompt ([
            {
               type: "input",
               name: "userInput",
               message: "Guess letters from A to Z" 
            }
        ])
    }
    

    // once they guess, input, call Word.userGuess and pass the function they guessed

    // if guessed all correct or incorrect

}
    
