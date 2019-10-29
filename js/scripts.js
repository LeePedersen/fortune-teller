$(document).ready(function(){
  $("form#luckyStyuff").submit(function(event) {
    event.preventDefault();
    var unlucky = []; $("input:checkbox[name=unlucky]:checked").each(function() {
      var unluckyThing = $(this).val();
      unlucky.push(unluckyThing);
    });
    var lucky = [];
    $("input:checkbox[name=lucky]:checked").each(function() {
      var luckyThing = $(this).val();
      lucky.push(luckyThing);
    });

    if (unlucky.length > lucky.length) {
      $("#responses").text("Expect sudden death");
    } else if (unlucky.length < lucky.length) {
      $("#responses").text("Expect good sex");
    } else if (unlucky.length === lucky.length) {
      $("#responses").text("The future is ambiguous");
    } else {
      $("#responses").text("You broke it");
    }

    $('#transportation_survey').hide();
  });
});
