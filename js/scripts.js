var wordOrder = function(sentence) {
  var wordArray = sentence.split(" ");
  var foundWords = [];

  foundWords.push([wordArray[0], 1]);

  for (var word_index = 1; word_index < wordArray.length; word_index++){
    var altered = false;
    foundWords.forEach(function(fWord) {
      if (wordArray[word_index] === fWord[0]){
        fWord[1] += 1;
        altered = true;
      }
    });
    if (altered === false) {
      foundWords.push([wordArray[word_index],1]);
    }
  };

  return foundWords;
};
