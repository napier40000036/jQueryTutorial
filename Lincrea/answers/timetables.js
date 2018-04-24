$(document).ready(function(){
  $('body').prepend($('<div/>',
    {text:'Hide key',
     css:{color:'blue',
          cursor:'pointer'},
     click:function(){
       if ($('#key').is(':visible')){
         $('#key').fadeOut('slow');
         $(this).html('Show key');
       }else{
         $('#key').fadeIn('slow');
         $(this).html('Hide key');
       }
     }
    }));
  $('#key th').css({backgroundColor:'black',color:'white'});

// Highlight subjects that match the rollover
  $('table#grid td:not(:empty)').mouseover(function(){
    var module = $(this).find('div').first().html();
    var l = $('td:not(:empty)').filter(function(){
      return $(this).find('div').first().html()==module;
    });
    l.css('background','red');
  });
  $('table#grid td').mouseout(function(){
    $('table td').css('background','inherit');
  });
});
