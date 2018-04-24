/*

$(document).ready(function(){
  for (var i=0;i<100;i++){
    var msg = $('<div>Hello World</div>');
    msg.css('font-size',i);
    $('body').append(msg);
  }
});

$(document).ready(function(){
  var msg = $('<div>Hello World</div>');
  $('body').append(msg);
});


$(document).ready(function(){
  var lst = ["Zero","One","Two","Three"];
  var ul = $('<ul/>');
  for (var i=0;i<lst.length;i++){
    var li = $('<li/>');
    li.html(lst[i]);
    ul.append(li);
  }
  $('body').append(ul);
});
*/

$(document).ready(function(){
  var table=$('<table/>');
  for (var i=0;i<8;i++){
    var tr= $('<tr/>');
    for (var j=0;j<8;j++){
      var td=$('<td/>');
      td.html(i*j);
      tr.append(td);
    }
    table.append(tr);
  }
  $('body').append(table);
});
