$(document).ready(function(){

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

 $anchor.mouseenter(function() {
   $(this).css('transform','rotate(-45deg)');
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

});
