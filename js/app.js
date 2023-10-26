'use strict';
// Ask for name

function greeting() {
  let visitorName = prompt('What is your name?');
  console.log(visitorName);
  alert('Hello ' + visitorName + ' welcome to my About Me page!');
  return visitorName;
}

let visitorName = greeting();

// Question 1 - Am I married?

function married() {
  let marriedGuess = prompt('Am I married?');
  let normalizedMarriedGuess = marriedGuess.toLowerCase();
  console.log(marriedGuess);

  if( normalizedMarriedGuess === 'yes' ) {
    console.log('Correct!');
    alert('You are correct ' + visitorName + '!');
  } else if (normalizedMarriedGuess === 'y' ) {
    console.log('Correct!');
    alert('You are correct ' + visitorName + '!');
  }else {
    console.log('Wrong');
    alert('Sorry that is the wrong answer!');
  }
}

married();

// Question 2 - Do I have kids?

function kids() {
  let kidsGuess = prompt('Do I have kids?');
  let normalizedKidsGuess = kidsGuess.toLowerCase();
  console.log(kidsGuess);

  if( normalizedKidsGuess === 'yes' ) {
    console.log('Correct!');
    alert('You are correct ' + visitorName + '!');
  } else if (normalizedKidsGuess === 'y' ) {
    console.log('Correct!');
    alert('You are correct ' + visitorName + '!');
  } else {
    console.log('Wrong');
    alert('Sorry that is the wrong answer!');
  }
}

kids();

// Question 3 - Do I have dogs?

function dogs() {
  let dogGuess = prompt('Do I have dogs?');
  let normalizedDogGuess = dogGuess.toLowerCase();
  console.log(dogGuess);

  if( normalizedDogGuess === 'yes' ) {
    console.log('Correct!');
    alert('You are correct ' + visitorName + '!');
  } else if (normalizedDogGuess === 'y' ) {
    console.log('Correct!');
    alert('You are correct ' + visitorName + '!');
  } else {
    console.log('Wrong');
    alert('Sorry that is the wrong answer!');
  }
}

dogs();

// Question 4 - Using switch statement - Do I like to cook?

function cooking() {
  let cookingGuess = prompt('Do I like to cook?');
  cookingGuess = cookingGuess.toLowerCase();

  switch (cookingGuess) {
  case 'yes':
    console.log('Wrong - I hate to cook!');
    alert('Wrong ' + visitorName + ' I hate to cook!');
    break;
  case 'y':
    console.log('Wrong - I hate to cook!');
    alert('Wrong ' + visitorName + ' I hate to cook!');
    break;
  case 'no':
    console.log('Correct ' + visitorName + ' I hate to cook!');
    alert('Correct ' + visitorName + ' I hate to cook!');
    break;
  case 'n':
    console.log('Correct ' + visitorName + ' I hate to cook!');
    alert('Correct ' + visitorName + ' I hate to cook!');
    break;
  default:
    console.log('Wrong');
    alert('Wrong ' + visitorName);
    break;
  }
}

cooking();

// Question 5 - How old am I? - Using for loop (4 chances)
//Correct age = 44

function age() {
  for( let i = 1; i < 5; i++) {
    let age = prompt('How old do you think I am?');
    age = Number(age);
    console.log(age);

    if(age === 44) {
      alert('Wow! Great guess you are correct!');
      break;
    } else if(age > 44){
      alert('Wrong, try again, a little lower next time!');
    } else if(age < 45){
      alert('Wrong, try again, a little higher next time!');
    } if(i >= 4){
      alert('The correct answer is 44');
    }
  }
}

age();

// Question 6 - Can you guess the name of one of my children? - Using while loop (6 chances)
//Correct answers Colby or Carson
//This one stumped me, got help from ChatGPT to make it work

function guessKidsName() {
  let kidNames = ['Colby', 'Carson'];

  let guessedCorrectly = false;
  let guessCount = 0;
  let maxGuesses = 6;

  while( ! guessedCorrectly && guessCount < maxGuesses) {
    let guess = prompt('Can you guess the name of one of my children?');
    console.log(guess);

    if (kidNames.includes(guess)) {
      alert('Congratulations!  You guessed it.');
      guessedCorrectly = true;
    } else {
      alert('Sorry, that is not the correct name.  Try again.');
      guessCount++;
    }
  }

  if (!guessedCorrectly) {
    alert('You have reached the maximum number of guesses (6). The correct names were: Colby and Carson.');
  }
}

guessKidsName();


