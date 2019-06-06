/* exported gameGenerator accountGenerator randomInteger */
/*
We've written a few tests for your Game Generator function which you can find them in the 'specs' folder.
By the end of this exercise, you'll be writing tests for the functions yourself.
*/

function randomInteger(n) {
  return Math.floor(Math.random() * (n + 1));
}

function gameGenerator(input) {
  const boundLimit = input;
  var gameNumber = randomInteger(input);
  var guesses = 0;
  var gameInstance = {
    guess(guessNum){guesses++;return guessNum == gameNumber ? true : false;},
    reset(){gameNumber = randomInteger(boundLimit);guesses = 0;},
    giveUp(){var returnMe = gameNumber;this.reset();return returnMe;},
    numberGuesses(){return guesses;}
  };
  return gameInstance;
}

function accountGenerator(initial) {
  let balance = initial;
  let transactions = [];

  return {
    getBalance: function() {return balance;},
    withdraw: function(amount) {
      var withdrawal = {
        type: "withdrawal",
        amount: amount,
        before: balance,
        after: null,
        status: null
      };
      if (balance - amount >= 0) {
        balance = balance - amount;
        withdrawal.after = balance;
        withdrawal.status = "approved";
        transactions.unshift(withdrawal);
        return withdrawal;
      }
      withdrawal.after = balance;
      withdrawal.status = "denied";
      transactions.unshift(withdrawal);
      return withdrawal;
    },
    deposit: function(amount) {
      var deposited = {
        type: "deposit",
        amount: amount,
        before: balance,
        after: null,
        state: "approved"
      }
      balance = balance + amount;
      deposited.after = balance;
      transactions.unshift(deposited);
      return deposited;
    }
  };
}
