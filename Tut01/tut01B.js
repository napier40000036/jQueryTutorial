/*
$(document).ready(function(){
  var p=$('<p/>',{text:'Hello World',
           style:'border:solid;font-family:sans-serif'});
  $('body').append(p);
});

$(document).ready(function(){
  var p=$('<p/>',{text:'Hello World',
       css:{border:'solid',fontFamily:'sans-serif'}});
  $('body').append(p);
});

$(document).ready(function(){
  var t=$('<table/>');
  for(var i=0;i<8;i++){
    var tr=$('<tr/>');
    for (var j=0;j<8;j++){
      var td=$('<td/>',{text:i+' '+j});
      td.css({border:'solid'});
      tr.append(td);
    }
    t.append(tr);
  }
  $('body').append(t);
});
*/
$(document).ready(function(){
  var t=$('<table/>',{style:'border-collapse:collapse'});
  for(var i=0;i<8;i++){
    var tr=$('<tr/>');
    for (var j=0;j<8;j++){
      var td=$('<td/>',{text:i+' '+j});
      td.css({border:'solid thin'});
      td.mouseover(function(){$(this).css('background-color','red');});
      tr.append(td);
    }
    t.append(tr);
  }
  $('body').append(t);
});
