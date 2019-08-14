$(document).ready(function() {
$(form1).click(function(text){
$(form1).submit(function(){
  var numberInput=$("input#enternumbers")).val();
  $(".form1").text(numberInput);
});
});
});
