describe("wordOrder", function() {
  it("will take a single word string and return that word and a word count", function() {
    expect(wordOrder("cheese")).to.eql([[1, "cheese"]]);
  });

  it("will take a two word string and return those words and a word count for each", function() {
    expect(wordOrder("cheese ball")).to.eql([[1, "cheese"],[1, "ball"]]);
  });

  it("will take a two word repeat string and return one word and word count", function() {
    expect(wordOrder("ball ball")).to.eql([[2, "ball"]]);
  });

  it("will a complex series of repeated words and return them with corresponding number amounts.", function() {
    expect(wordOrder("ball ball string ball string string ball")).to.eql([[4, "ball"],[3, "string"]]);
  });

});
