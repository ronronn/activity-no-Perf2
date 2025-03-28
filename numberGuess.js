const readline = require('readline').createInterface({
  input: process.stdIn,
  output: process.stdOut
});

const secretNumber = Math.floor(Math.random() *10) + 1;
let attempts = 0

while (true) {
  readline.question('Guess a number between 1 and 10: ', guess =>{
    attempts++;
    const numGuess =  pareInt(guess );

    if  (isNaN(numGuess)) {
      console.log('Invalid input. Please enter a number.');
    }else if (numGuess <1 || numGuess > 10) {
      console.log('Please enter a number between 1 and 10.');
    }else if (numGuess < secretNumber) {
      console.log('Too low! Try again.');
    }else if (numGuess > secretNumber) {
      console.log(Too high! Trry again.');
    }else {
      console.log('Cogratulations! You guessed the correct number in ${attempts} attempts.');
      readline.close();
      break;
    }
  });
}
