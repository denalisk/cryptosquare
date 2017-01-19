var characterStripper = function(textInput) {

  var cleanText = textInput.replace(/[^a-z,0-9]/gi, '');

  console.log(cleanText);
  return cleanText;
}

var nearestSquare = function(number) {
  nearSquare = Math.ceil(Math.sqrt(number));
  return nearSquare;
};


$(function(){
  $("form.crypto-form").submit(function(event) {
    event.preventDefault();
    var textInput = $("#text-input").val();
    var textOutput = nearestSquare(characterStripper(textInput).length);

    $(".result").text(textOutput);
  })
});
