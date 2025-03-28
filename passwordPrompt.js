const readline = require('readline')
  input: process.stdIn,
  output: process.stdOut
});

const correctPassword = 'correctPassword';

let password;
do {
  readline.question('enter your password: ', input => {
    password = input;
    if (password === correctPassword) {
      console.log('access granted.');
      readline.close();
    } else {
      console.log (incorrect, Try again.');
    }
  });
} while (password !== correctPassword);
