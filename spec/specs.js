describe("wordOrder", function() {
  it("will take a single word string and return that word and a word count", function() {
    expect(wordOrder("cheese")).to.eql([["cheese", 1]]);
  });

  it("will take a two word string and return those words and a word count for each", function() {
    expect(wordOrder("cheese ball")).to.eql([["cheese", 1],["ball", 1]]);
  });

  it("will take a two word repeat string and return one word and word count", function() {
    expect(wordOrder("ball ball")).to.eql([["ball", 2]]);
  });
});
