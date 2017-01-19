var encryptor = function(textInput) {
  var cleanText = textInput.replace(/[^a-z,0-9]/gi, '');
  var arrayInput = cleanText.split("");
  var number = arrayInput.length;
  nearSquare = Math.ceil(Math.sqrt(number));
  var sentence = [];
  var word = [];
  var counter = 0;
  for (sentenceIndex = 0; sentenceIndex < number; sentenceIndex++) {
    if (counter < nearSquare) {
      word.push(arrayInput[sentenceIndex]);
      counter += 1;
    } else {
      sentence.push(word);
      word = [];
      word.push(arrayInput[sentenceIndex])
      counter = 1;
    }
  }
  sentence.push(word);
  console.log(sentence);
  return sentence;
};

$(function(){
  $("form.crypto-form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#text-input").val();
    var textOutput = encryptor(textInput);

    $(".result").text(textOutput);
  })
});
