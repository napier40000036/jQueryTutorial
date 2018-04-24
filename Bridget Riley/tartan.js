$(function(){
	var cols = [
				{c:'green',w:8},
				{c:'yellow',w:32},
				{c:'aqua',w:8},
				{c:'green',w:8},
				{c:'aqua',w:8},
				{c:'yellow',w:32},
				{c:'green',w:8},
				{c:'black',w:2},
				];
	var acc = 0;
	for(var i=0;i<60;i++){
		var bc = cols[i%cols.length];
		$('<div/>',{css:{backgroundColor:bc.c,height:bc.w,opacity:.5}})
			.appendTo('body');
	}
	for(var i=0;i<60;i++){
		var bc = cols[i%cols.length];
		$('<div/>',{css:{backgroundColor:bc.c,width:bc.w,opacity:0.5,
		                 position:'absolute',left:acc,height:500,top:0}})
			.appendTo('body');
		acc+=bc.w;
	}
})