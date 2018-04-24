//$(ready).body(function(){alert(42)});
//{ready:function(){alert(42)}};
//$(document).ready(function(){alert(42)});
//$(function).ready(body(){alert(42)});
//$(document).ready(function(alert(42)));

/*
$(document).ready(function(){
  var d = $('<div>42</div>')
  d.css('color','red');
  $('body').append(d);
});

*/
/*
$(document).ready(function(){
  var table=$('<table/>');
  for (var i=0;i<8;i++){
    var tr= $('<tr/>');
    for (var j=0;j<8;j++){
      var td=$('<td/>');
      td.html(i*j);
      td.style('border','solid');
      tr.append(td);
    }
    table.append(tr);
  }
  $('body').append(table);
});
*/
$(document).ready(function(){
  var d = $('<div style="color:green;border:solid">Hello</div>');
  var e = $('<div/>',{text:'Hello',css:{color:'green',border:'solid'}});
  var book = {isbn:'9780340739754',
              title:'Ghostwitten',
              author:'David Mitchell'};
  $('body').append(d);
  $('body').append(e);
});
