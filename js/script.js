//:businesslogic
$.(document).ready(function(){
  $("form#options").submit(function(event){

  var question1=$("input:radio[name=question1]:checked").val();
  var question2=$("input:radio[name=question2]:checked").val();
  var question3=$("input:radio[name=question3]:checked").val();
  var result= parseInt(question1)+parseInt(question2)+parseInt(question3)
  $("#result").text("Your total score is "+result);


  $(".quiz").fadeOut();
  $(".answer").fadeIn();

  event.preventDefault();
});

});
