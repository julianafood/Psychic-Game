var wins = 0
var losses = 0
var computerChoices = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var compChoicesText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text")

document.onkeyup = function(event) {
    var userInput = event.key.toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    for (var i = 0; i < computerChoice.length; i++) {
        if (userGuess === computerChoice[i]) {
            wins++;
        }
        else {
            losses++;
        

        }
