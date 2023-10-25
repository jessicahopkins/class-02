"use strict";
// Ask for name

let name = prompt("What is your name?");
console.log(name);
alert("Hello " + name + " welcome to my About Me page!");

// Question 1 - Am I married?

let marriedGuess = prompt("Am I married?");
let normalizedMarriedGuess = marriedGuess.toLowerCase();
console.log(marriedGuess);

if( normalizedMarriedGuess === "yes" ) {
    console.log("Correct!");
    alert("You are correct " + name + "!");
} else if (normalizedMarriedGuess === "y" ) {
    console.log("Correct!");
    alert("You are correct " + name + "!");
}else {
    console.log("Wrong");
    alert("Sorry that is the wrong answer!");
}

// Question 2 - Do I have kids?

let kidsGuess = prompt("Do I have kids?");
let normalizedKidsGuess = kidsGuess.toLowerCase();
console.log(kidsGuess);

if( normalizedKidsGuess === "yes" ) {
    console.log("Correct!");
    alert("You are correct " + name + "!");
} else if (normalizedKidsGuess === "y" ) {
    console.log("Correct!");
    alert("You are correct " + name + "!");
} else {
    console.log("Wrong");
    alert("Sorry that is the wrong answer!");
}

// Question 3 - Do I have dogs?

let dogGuess = prompt("Do I have dogs?");
let normalizedDogGuess = dogGuess.toLowerCase();
console.log(dogGuess);

if( normalizedDogGuess === "yes" ) {
    console.log("Correct!");
    alert("You are correct " + name + "!");
} else if (normalizedDogGuess === "y" ) {
    console.log("Correct!");
    alert("You are correct " + name + "!");
} else {
    console.log("Wrong");
    alert("Sorry that is the wrong answer!");
}

// Question 4 - Using switch statement - Do I like to cook?

let cookingGuess = prompt("Do I like to cook?");
cookingGuess = cookingGuess.toLowerCase();

switch (cookingGuess) {
    case "yes":
        console.log("Wrong - I hate to cook!");
        alert("Wrong - I hate to cook!");
        break;
    case "y":
        console.log("Wrong - I hate to cook!");
        alert("Wrong - I hate to cook!");
        break;    
    case "no":
        console.log("Correct - I hate to cook!");
        alert("Correct - I hate to cook!");
        break;
    case "n":
        console.log("Correct - I hate to cook!");
        alert("Correct - I hate to cook!");
        break;    
    default:
        console.log("Wrong");
        alert("Wrong");
        break;        
}




