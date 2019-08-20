$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var string = $("#convert-this").text();
    var sentences = string.split('');
    console.log("split sentences:", sentences);
    var vowels = ['a', 'i', 'e', 'o', 'u'];
    var array = [];
    for (var i = 0; i < sentences.length; i++) {
      for (var j = 0; j < vowels.length; j++) {
        if(sentences[i] === vowels[j]) {
          sentences[i] = '-';
        }
      }
      array.push(sentences[i]);
    }
    $("#result").show();
    $("#result-sentence").text(array.join(''));
  });
});
