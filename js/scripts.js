var encryptor = function(textInput) {
  var arrayInput = textInput.replace(/[^a-z,0-9,\-]/gi, '').split();
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


  var mainArray = [];
  for (i=0; i < sentence.length; i++) {
    for (j=0; j < sentence.length; j++) {
      if (sentence[j][i] != undefined) {
        mainArray.push(sentence[j][i]);
      } else {
        continue;
      }
    }
  }
  var codeText = "";
  for (i = 0; i < mainArray.length; i++) {
    if (i % 5 === 0) {
      codeText += (" " + mainArray[i]);
    } else {
      codeText += mainArray[i];
    }
  }
  return codeText;
};

$(function(){
  $("form.crypto-form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#text-input").val();
    var textOutput = encryptor(textInput);
    $(".result").text(textOutput);
  })
});
