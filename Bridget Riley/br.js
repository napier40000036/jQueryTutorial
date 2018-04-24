$(function(){
	$('<div/>',{id:'board',css:{width:600,backgroundColor:'black',padding:0}})
		.appendTo('body');
	for(var i=0;i<6*6;i++){
		$('<div/>',{css:{border:'solid 1px gray',width:94,height:94,margin:2,
						display:'inline-block',
						borderRadius:47,backgroundColor:'white'}})
			.appendTo('#board')
	}
})