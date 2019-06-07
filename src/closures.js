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
        status: null,
        time: new Date()
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
        status: "approved",
        time: new Date()
      }
      balance = balance + amount;
      deposited.after = balance;
      transactions.unshift(deposited);
      return deposited;
    },
    //This function returns a slice of the transaction array with length specified by user
    transactionHistory: function(numberOf){
      return transactions.slice(0, numberOf);
    },
    averageTransaction: function(){
      //This function calculates and returns the average deposit
      function averageDeposits(){
        var sumDeposits = 0;
        var totalDeposits = 0;
        var averageDeposit = 0;
        transactions.forEach(function(n){
          if (n["type"] === "deposit") {
            sumDeposits += n["amount"];
            totalDeposits++;
          }
        }); 
        if (totalDeposits > 0) {averageDeposit = sumDeposits / totalDeposits;}
        return averageDeposit;
      }
      //This function calculates and returns the average withdrawal
      function averageWithdrawals(){
        var sumWithdrawals = 0;
        var totalWithdrawals = 0;
        var averageWithdrawals = 0;
        transactions.forEach(function(p){
          if (p["type"] === "withdrawal" && p["status"] === "approved"){
            sumWithdrawals += p["amount"];
            totalWithdrawals++;
          }
        });
        if (totalWithdrawals > 0) {averageWithdrawals = sumWithdrawals / totalWithdrawals;}
        return averageWithdrawals;
      }
      //This returns an object containing the average deposit and withdrawals
      return {
        deposit: averageDeposits(),
        withdrawal: averageWithdrawals()
      };
    }
  };
}
