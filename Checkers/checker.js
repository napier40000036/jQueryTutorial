$(document).ready(function(){
  board = [[1,0,1,0,1,0,1,0],
           [0,1,0,1,0,1,0,1],
           [1,0,1,0,1,0,1,0],
           [0,0,0,0,0,0,0,0],
           [0,0,0,0,0,0,0,0],
           [0,2,0,2,0,2,0,2],
           [2,0,2,0,2,0,2,0],
           [0,2,0,2,0,2,0,2]]
           ;
  var wid = 20;
  var gap = 4;
  for (var i=0;i<8;i++)
    for (var j=0;j<8;j++){
      var sq = $('<div/>',{css:{textAlign:'center'}});
      if (board[i][j]==1)
        sq.html("O");
      if (board[i][j]==2)
        sq.html("X");
      sq.css({
        position:'absolute',left:j*(wid+gap)+gap,top:i*(wid+gap)+gap,
        width:wid,height:wid,cursor:'pointer',
        border:'solid thin black'});
      if ((i+j)%2==0)
        sq.css({backgroundColor:'gray'});
      sq.click(function(){});
      $('body').append(sq);
    }
});