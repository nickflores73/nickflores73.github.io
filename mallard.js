$(document).ready(function(){
  
  /* gear hammer and text vars */
  $path5 = $('.path5');
  $path6 = $('.path6');
  $path7 = $('.path7');
  $path8 = $('.path8');

  $roto = $('.roto');
  $geared = $('.geared');
  $textpop = $('.textpop');
  $hammered = $('.hammered');
  $anchor = $('.anchor');
  $textpoop = $('.textpoop');

  $geared.css('transform', 'scale(1,1)');
  $hammered.css('transform', 'scale(1,1)');

  /* gear rotate and text slide right */
  $roto.mouseenter(function() {
    $(this).css('transform', 'rotate(90deg)');
    $textpop.css('left', '40vw');
    $textpop.css('opacity', '1');
    $textpop.css('z-index', '0');
  });

  $roto.mouseleave(function() {
    $(this).css('transform', 'rotate(0deg)');
    $textpop.css('left','30vw');
    $textpop.css('opacity','0');
    $textpop.css('z-index', '-1');
  });

 /* hammer rotate and text slide left */
 $anchor.mouseenter(function() {
   $(this).css('transform','rotate(-46deg)');
   $textpoop.css('right','33vw');
   $textpoop.css('opacity','1');
   $textpoop.css('z-index','0');
 });

 $anchor.mouseleave(function() {
   $(this).css('transform','rotate(0deg)');
   $textpoop.css('right','12vw');
   $textpoop.css('opacity','0');
   $textpoop.css('z-index','-1');
 });

 /* array of circles */
 $circles = $('.exp-circle');

 /* click toggle jquery func if needed */
 (function($) {
  $.fn.clickToggle = function(func1, func2) {
    var funcs = [func1, func2];
    this.data('toggleclicked',0);
    this.click(function() {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
    });
    return this;
  };
 }(jQuery));

 // circle 1
 $circles.eq(0).mouseenter(function() {
  $(this).css('width','10vw');

  $circles.eq(1).css('width','4vw');
  $circles.eq(1).css('margin-top','6vw');
  $circles.eq(1).css('margin-left','6vw');

  $circles.eq(3).css('width','4vw');
  $circles.eq(4).css('width','4vw');
 });
 
 $circles.eq(0).mouseleave(function() {
  $(this).css('width', '6vw');

  $circles.eq(1).css('margin-top','inherit');
  $circles.eq(1).css('margin-left','inherit');
  $circles.eq(1).css('width','6vw');
  
  $circles.eq(3).css('width','6vw');
  $circles.eq(4).css('width','6vw');

 });

 // circle 2 
 $circles.eq(1).mouseenter(function() {
  $(this).css('width','10vw');
  $(this).css('margin-left','-2vw');

  $circles.eq(0).css('width','4vw');
  $circles.eq(2).css('width','4vw');
  $circles.eq(2).css('margin-left','2vw');

  $circles.eq(3).css('width','4vw');
  $circles.eq(4).css('width','4vw');
  $circles.eq(5).css('width','4vw');

 });

 $circles.eq(1).mouseleave(function() {
   $(this).css('width','6vw');
   $(this).css('margin-left','inherit');

   $circles.eq(0).css('width','6vw');
   $circles.eq(2).css('width','6vw');
   $circles.eq(2).css('margin-left','inherit');

  $circles.eq(3).css('width','6vw');
  $circles.eq(4).css('width','6vw');
  $circles.eq(5).css('width','6vw');
 });

 // circle 3 
 $circles.eq(2).mouseenter(function() {
  $(this).css('width','10vw');
  $(this).css('margin-left','-4vw');

  $circles.eq(1).css('width','4vw');
  $circles.eq(1).css('margin-top','6vw');
  $circles.eq(1).css('margin-left','-4vw');

  $circles.eq(4).css('width','4vw');
  $circles.eq(5).css('width','4vw');
  $circles.eq(4).css('margin-left','2vw');
  $circles.eq(5).css('margin-left','2vw');
  $circles.eq(4).css('margin-top','2vw');
  $circles.eq(5).css('margin-top','2vw');
 });

 $circles.eq(2).mouseleave(function() {
   $(this).css('width','6vw');
   $(this).css('margin-left','inherit');

  $circles.eq(1).css('width','6vw');
  $circles.eq(1).css('margin-top','inherit');
  $circles.eq(1).css('margin-left','inherit');

  $circles.eq(4).css('width','6vw');
  $circles.eq(5).css('width','6vw');
  $circles.eq(4).css('margin-left','inherit');
  $circles.eq(5).css('margin-left','inherit');
  $circles.eq(4).css('margin-top','inherit');
  $circles.eq(5).css('margin-top','inherit');

 });

 // circle 4
 $circles.eq(3).mouseenter(function() {
   $(this).css('width','10vw');
   $circles.eq(4).css('width','4vw');
   $circles.eq(4).css('margin-top','6vw');
   $circles.eq(4).css('margin-left','6vw');
   $circles.eq(6).css('width','4vw');
   $circles.eq(7).css('width','4vw');
   $circles.eq(6).css('margin-top','1vw');
   $circles.eq(7).css('margin-top','1vw');

 });

 $circles.eq(3).mouseleave(function() {
   $(this).css('width','6vw');
   $circles.eq(4).css('width','6vw');
   $circles.eq(4).css('margin-top','inherit');
   $circles.eq(4).css('margin-left','inherit');
   $circles.eq(6).css('width','6vw');
   $circles.eq(7).css('width','6vw');
   $circles.eq(6).css('margin-top','inherit');
   $circles.eq(7).css('margin-top','inherit');


 });

 // circle 5 
 $circles.eq(4).mouseenter(function() {
   $(this).css('width','10vw');
   $(this).css('margin-left','-2vw');
   $circles.eq(3).css('width','4vw');
   $circles.slice(4-8).css('width','4vw');
   $circles.eq(5).css('margin-left','2vw');
 });

 $circles.eq(4).mouseleave(function() {
   $(this).css('width','6vw');
   $(this).css('margin-left','inherit');
   $circles.eq(3).css('width','6vw');
   $circles.slice(4-8).css('width','6vw');
   $circles.eq(5).css('margin-left','inherit');
 });

// circle 6 
 $circles.eq(5).mouseenter(function() {
   $(this).css('width','10vw');
   $(this).css('margin-left','-4vw');
   $circles.eq(4).css('width','4vw');
   $circles.eq(4).css('margin-top','6vw');
   $circles.eq(4).css('margin-left','-4vw');
   $circles.slice(6-8).css('width','4vw');
   $circles.slice(6-8).css('margin-left','1vw');
   $circles.slice(6-8).css('margin-top','1vw');
 });

 $circles.eq(5).mouseleave(function() {
   $(this).css('width','6vw');
   $(this).css('margin-left','inherit');
   $circles.eq(4).css('width','6vw');
   $circles.eq(4).css('margin-top','inherit');
   $circles.eq(4).css('margin-left','inherit');
   $circles.slice(6-8).css('width','6vw');
   $circles.slice(6-8).css('margin-left','inherit');
   $circles.slice(6-8).css('margin-top','inherit');

 });

 // circle 7 
 $circles.eq(6).mouseenter(function() {
   $(this).css('width','10vw');
   $circles.eq(8).css('width','4vw'); 
 });

 $circles.eq(6).mouseleave(function() {
   $(this).css('width','6vw');
  $circles.eq(8).css('width','6vw');
 });

 // circle 8 
 $circles.eq(7).mouseenter(function() {
   $(this).css('width','10vw');
 });

 $circles.eq(7).mouseleave(function() {
   $(this).css('width','6vw');

 });

 // circle 9 
 $circles.eq(8).mouseenter(function() {
   $(this).css('width','10vw');
   $circles.eq(6).css('width','4vw'); 
 });

 $circles.eq(8).mouseleave(function() {
   $(this).css('width','6vw');
   $circles.eq(6).css('width','6vw'); 
 });

 /*left right cirle expand */

 $LRs = $('.LR-circle');

 $LRs.eq(0).mouseenter(function() {
  $(this).css('width','10vw');
  $(this).css('margin-left','-3vw');
  $LRs.eq(1).css('width','4vw');
  $LRs.eq(2).css('width','2vw');
  $LRs.eq(1).css('margin-left','3vw');
  $LRs.eq(2).css('margin-left','4vw');
 });

  $LRs.eq(0).mouseleave(function() {
    $(this).css('width','6vw');
    $(this).css('margin-left','inherit');
    $LRs.eq(1).css('width','6vw');
    $LRs.eq(2).css('width','6vw');
    $LRs.eq(1).css('margin-left','inherit');
    $LRs.eq(2).css('margin-left','inherit');
  });

  $LRs.eq(2).mouseenter(function() {
    $(this).css('width','10vw');
    $LRs.eq(1).css('width','4vw');
    $LRs.eq(0).css('width','2vw');
  });

  $LRs.eq(2).mouseleave(function() {
    $(this).css('width','6vw');
    $LRs.eq(1).css('width','6vw');
    $LRs.eq(0).css('width','6vw');
  });

});
