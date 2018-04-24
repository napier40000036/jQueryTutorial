$(document).ready(function(){
  var ls = [["Indecent","Proposal"],
            ["Beautiful","Creatures"],
            ["Dangerous","Liasons"]];
  for (var i=0;i<ls.length;i++)
    for (var j=0;j<ls.length;j++)
      $('body').append($('<div/>',
         {text:ls[i][0]+" "+ls[j][1]}));
});
/*

$(document).ready(function(){
  var ls = [["Indecent","Proposal"],
            ["Beautiful","Creatures"],
            ["Dangerous","Liasons"]];
  var u = $('<ul/>');
  for (var i=0;i<ls.length;i++)
    for (var j=0;j<ls.length;j++)
      u.append($('<li/>',
         {text:ls[i][0]+" "+ls[j][1]}));
  $('body').append(u);
});


$(document).ready(function(){
  var ls = [["Indecent","Proposal"],
            ["Beautiful","Creatures"],
            ["Dangerous","Liasons"]];
  var t = $('<table border="1"/>');
  for (var i=0;i<ls.length;i++){
    var tr = $('<tr/>');
    for (var j=0;j<ls.length;j++)
      tr.append($('<td/>',
         {text:ls[i][0]+" "+ls[j][1]}));
    t.append(tr);
  }
  $('body').append(t);
});
*/