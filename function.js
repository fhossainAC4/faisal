/*
█▀▀█ █░░ █░░   █▀▀ ▀▀█▀▀ █▀▀█ █▀▀█   █▀▀ █▀▀█ █▀▀▄ █▀▀
█▄▄█ █░░ █░░   ▀▀█ ░░█░░ █▄▄█ █▄▄▀   █░░ █░░█ █░░█ █▀▀
▀░░▀ ▀▀▀ ▀▀▀   ▀▀▀ ░░▀░░ ▀░░▀ ▀░▀▀   ▀▀▀ ▀▀▀▀ ▀▀▀░ ▀▀▀
*/
function Greeting() {
    console.log("Welcome to Yahoo!");
    return "Welcome to Yahoo!";
}
Greeting();

//I want to make a function that you can give a numer
// as an input, and give me a random number, between 0 and that input
// Give the function input 5, you wil get a random numner from 0 to 5
function coolNick(input) {
    //Want to use input as the range
    var randomNumber = (Math.random() * input);
    var result = Math.floor(randomNumber);
    return result;
}

console.log(coolNick(10));

//Declare an array with two Cool Nick entries to increase his odds
var people = ["Crhis", "Will", "Edgar", "Faisal", "Cool Nick"]
//Function to get random number
function getRandomWinner(index) {
    // Returns a random random 
    var randomIndex = Math.random() * index;
    var result = Math.floor(randomIndex);
    return result;
}
//Prints out a random based to the Function
console.log(people[getRandomWinner(people.length)])