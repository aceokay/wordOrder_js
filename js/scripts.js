var wordOrder = function(sentence) {
  var wordArray = sentence.split(" ");
  var foundWords = [];

  wordArray.forEach(function(word) {
    foundWords.push([word,1]);
  });

  return foundWords;
};
