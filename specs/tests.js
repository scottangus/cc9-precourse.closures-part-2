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

  it("should have some tests", () => {
    expect(false).toBeTruthy();
  });
});
