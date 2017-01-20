var race = function(textInput) {
  var d = new Date();
  var start = d.getTime();
  for (i=0; i<100000; i++) {
    encryptor(textInput);
  }
  var a = new Date();
  var end = a.getTime();
  var elapsed = end - start;
  console.log(elapsed);
}

var encryptor = function(textInput) {
  var arrayInput = textInput.replace(/[^a-z0-9\-]/gi, '').split('');
  var number = arrayInput.length;
  var nearSquare = Math.ceil(Math.sqrt(number));
  var sentence = [];
  var word = [];
  for (sentenceIndex = 0; sentenceIndex < number; sentenceIndex++) {
    if (sentenceIndex % nearSquare === 0) {
      sentence.push(word);
      word = [];
      word.push(arrayInput[sentenceIndex]);
    } else {
      word.push(arrayInput[sentenceIndex])
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
    race(textInput);
  })
});
