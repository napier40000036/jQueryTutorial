$(document).ready(
  function () {

    $('td').mouseover(function(){
      if ($(this).children().length>0){
        $(this).css('background-color','red');
        var code = $(this).find('div').first().html();
        $('td').filter(function(index){
            return $(this).find('div').first().html()==code;
          }).css('background-color','pink');
      }
    });
    $('#key th').mouseover(function(){
      $(this).parent().css('background-color','green');
    });
    $('th').mouseover(function(){
      $(this).parent().find('.room').css('background-color','blue');
    });
    $('td').mouseout(function(){
      if ($(this).children().length>0)
        $(this).css('background-color','inherit');
      var code = $(this).find('div').first().html();
      $('td').filter(function(index){return $(this).find('div').first().html()==code;}).css('background-color','inherit');
    });
    $('#key th').mouseout(function(){
      $(this).parent().css('background-color','inherit');
    });
    $('th').mouseout(function(){
      $(this).parent().find('.room').css('background-color','inherit');
    });
  });

