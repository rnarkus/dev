$(document).ready(function() {

 function flyPlane(){
   plane.css('left', startPos);
   plane.animate({left: -200}, 5000, 'linear');
   plane1.css('left', startPos);
   plane1.animate({left: -200}, 5000, 'linear');
 };

  var screenWidth = $(document).width();
  var startPos = screenWidth;
  var plane = $('#koopa1');
  var plane1 = $('#koopa2');
  flyPlane();
  setInterval(function() {
    flyPlane();
}, 7000);

});
