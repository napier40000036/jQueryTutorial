$(document).ready(
  function () {
    $('body').prepend($('<div/>',
    {text:'Hide key',
     css:{color:'blue', cursor:'pointer'},
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

    //Make cells red
    $('td:not(:empty)').mouseover(function(){
       var module = $(this).find('div').first().html();
       var l = $('td:not(:empty)').filter(function(index){
         var omodule = $(this).find('div').first().html();
         return module == omodule;
       });
       l.css({backgroundColor:'red'});
      });
    $('td:not(:empty)').mouseout(function(){
       $('td:not(:empty)').css({backgroundColor:'inherit'});
      });
  });

