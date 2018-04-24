$(function(){
	var nx = 24;
	var ny = 18;
	var bulge = function(a){
		return 22;
		return 94*(a)*(nx-a)/nx/2;
	}
	for(var i=0;i<ny;i++){
		$('<div/>',{id:'row'+i,css:{backgroundColor:'white',paddingLeft:(i%2)*11}})
			.appendTo('body');
		for(var j=0;j<nx-(i%2);j++){
			$('<div/>',{css:{
							width:bulge(j+.5),
							height:bulge(i+.5),
							margin:'0px 3px',
							display:'inline-block',
							'border-radius':'50%',
							backgroundColor:'black'}})
			.appendTo('#row'+i)

		}
	}
})