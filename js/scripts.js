$(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });
  $(".hovercraft").dblclick(function() {
    $("#no-penguin").fadeToggle();
    $("#yes-penguin").fadeToggle();
  });
  $("#polar").dblclick(function() {
    $(".image").fadeIn();
    
  });

});
