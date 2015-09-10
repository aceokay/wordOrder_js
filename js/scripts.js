var wordOrder = function(sentence) {
  var wordArray = sentence.toLowerCase().split(" ");
  var foundWords = [];

  foundWords.push([1, wordArray[0]]);

  for (var word_index = 1; word_index < wordArray.length; word_index++){
    var altered = false;
    foundWords.forEach(function(fWord) {
      if (wordArray[word_index] === fWord[1]){
        fWord[0] += 1;
        altered = true;
      }
    });
    if (altered === false) {
      foundWords.push([1, wordArray[word_index]]);
    }
  };

  return foundWords.sort().reverse();
};
