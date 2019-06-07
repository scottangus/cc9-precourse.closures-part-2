describe("gameGenerator", () => {
  it("should be there", () => {
    expect(gameGenerator).toBeDefined();
    expect(typeof gameGenerator).toBe("function");
  });

  it("should generate some games!", () => {
    const game = gameGenerator(4);
    expect(typeof game).toBe("object");
  });

  it("should have just one winning number", () => {
    const bound = 4;
    const game = gameGenerator(bound);
    const number = [];
    for (let i = 0; i < bound; i++) {
      if (game.guess(i)) {
        number.push(i);
      }
    }
    expect(number.length).toBe(1);
  });

  it("should have a reset method", () => {
    const game = gameGenerator(5);
    expect(game.reset).toBeDefined();
    expect(typeof game.reset).toBe("function");
  });

  it("should have a giveUp method that returns the winnning number", () => {
    const game = gameGenerator(0);
    expect(game.guess(0)).toBeTruthy();
    expect(game.giveUp()).toBe(0);
  });
});

describe("accountGenerator", () => {
  it("should be there", () => {
    expect(accountGenerator).toBeDefined();
    expect(typeof accountGenerator).toBe("function");
  });

  it("should have a getBalance function that returns current balance", () => {
    const account = accountGenerator(1000);
    expect(account.getBalance).toBeDefined();
    expect(typeof account.getBalance).toBe("function");
    expect(account.getBalance()).toEqual(1000);
  });
  it("should have a withdraw function that returns an object", () =>{
    const account = accountGenerator(1000);
    expect(account.withdraw).toBeDefined();
    expect(typeof account.withdraw(0)).toBe("object");
  });
  it("should have a deposit function that returns an object", () =>{
    const account = accountGenerator(1000);
    expect(account.deposit).toBeDefined();
    expect(typeof account.deposit(0)).toBe("object");
  });
  it("should have a transactionHistory function that returns the last n withdrawals/deposits", () =>{
    const account = accountGenerator(1000);
    account.deposit(1000);
    account.deposit(1000);
    account.withdraw(1000);
    account.withdraw(1000);
    expect(Array.isArray(account.transactionHistory(1))).toBe(true);
    expect(account.transactionHistory(3).length).toEqual(3);
    expect(account.transactionHistory(4).length).toEqual(4);
    expect(account.transactionHistory(5).length).toEqual(4);
    expect(typeof account.transactionHistory(1)[0]).toBe("object");
  });
  it("should have a averageTransaction function that returns an object with deposits and withdrawals", () =>{
    const account = accountGenerator(1000);
    account.deposit(1000);
    account.withdraw(3000);
    account.deposit(500);
    account.withdraw(2000);
    account.withdraw(500);
    expect(account.averageTransaction()["deposit"]).toEqual(750);
    expect(account.averageTransaction()["withdrawal"]).toEqual(1250);
  });
  it("should have a time key as part of the transaction data", () =>{
    const account = accountGenerator(1000);
    account.deposit(1000);
    expect(account.transactionHistory(1)[0].time).toBeDefined();
  })
});
