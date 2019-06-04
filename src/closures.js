/* exported gameGenerator accountGenerator randomInteger */
/*
We've written a few tests for your Game Generator function which you can find them in the 'specs' folder.
By the end of this exercise, you'll be writing tests for the functions yourself.
*/

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(input) {
  var gameInstance = { boundLimit : input,
                      gameNumber : randomInteger(input),
                      guesses : 0,
                      guess(guessNum){return guessNum == this.gameNumber ? true : false;},
                      reset(){this.gameNumber = randomInteger(this.boundLimit);this.guesses = 0;},
  };
  return gameInstance;
}

function accountGenerator(initial) {
  let balance = initial;

  return {
    withdraw: function(amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return `Here’s your money: $${amount}`;
      }
      return "Insufficient funds.";
    },
    deposit: function(amount) {
      balance = balance + amount;
      return `Your balance is: $${balance}`;
    }
  };
}
