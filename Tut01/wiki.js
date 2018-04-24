$(document).ready(function(){
  $('div').hide();
  $('#content').show();
  $('.firstHeading').show();
  $('#bodyContent').show();
  $('.mw-content-ltr').show();
  $('.mw-content-ltr>:not(h2)').hide();
  $('.mw-content-ltr>h2 span.editsection').hide();
  $('div.mw-content-ltr').children().first().nextUntil('h2').show();
  $('.infobox,#toc').hide();  
  $('.mw-content-ltr>h2').css('cursor','pointer');
  $('.mw-content-ltr>h2').click(function(){
    $(this).nextUntil('h2').toggle('slow');
  });
});
/*
$(document).ready(function(){
  $('.infobox').css({
    'float':'right',
    border:'solid thin black'});
  $('#content').css({
    marginLeft:'10em',
    background:'white',
    padding:'1em'
  });
  $('#mw-panel').css({
    width:'10em',
    position:'absolute',
    top:'160px'
  });
  $('h1').css({
    borderBottom:'solid thin black'
  });
  $('#mw-page-base').css({
    height:'5em'
  });
  $('body').css({
    fontFamily:'sans-serif',
    background:'#F3F3F3'
  });
  $('div#mw-panel ul li').css({
    fontSize:'0.75em'
  });
});
$(document).ready(function(){
  $('#mw-panel div.body').hide();
  $('#mw-panel h5').click(function(){
    $(this).next('div.body').toggle('slow');
  });
});
*/