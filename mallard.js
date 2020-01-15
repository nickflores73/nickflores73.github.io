$(document).ready(function(){

  $path5 = $('.path5');
  $path6 = $('.path6');
  $path7 = $('.path7');
  $path8 = $('.path8');

  $roto = $('.roto');
  $geared = $('.geared');
  $textpop = $('.textpop');

  $geared.css('transform', 'scale(1,1)');
  $roto.mouseenter(function() {
    $(this).css('transform', 'rotate(90deg)');
    $textpop.css('left', '40vw');
    $textpop.css('opacity', '1');
    $textpop.css('z-index', '0');
  });

  $roto.mouseleave(function() {
    $(this).css('transform', 'rotate(0deg)');
    $textpop.css('left','20vw');
    $textpop.css('opacity','0');
    $textpop.css('z-index', '-1');
  });

});
