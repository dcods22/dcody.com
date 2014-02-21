$('#nav a').hover(
	function(){
	    $( this ).animate({ color: "#fff", 'opacity': '1', }, 500);
	}, function(){
	    $( this ).animate({ color: "#a8a9ab", 'opacity' : '0.9', }, 500);	
	}
);

$('.active').hover(
	function(){
	    $( this ).animate({ color: "#fff", 'opacity': '1', }, 500);
	}, function(){
	    $( this ).animate({ color: "#fff", 'opacity' : '1', }, 500);	
	}
);

$('.logoHover').hover(
	function(){
	    $( this ).animate({ 'fontSize': "+=10px", 'marginTop': "-=5px", color: '#9dbdd9',}, 400);
	}, function(){
	    $( this ).animate({ 'fontSize': "-=10px", 'marginTop': "+=5px", color: '#FFF'}, 400);	
	}
);


$('.welcome').hover(
	function(){
	    $( this ).animate({ color: "#224461", }, 500);
	}, function(){
	    $( this ).animate({ color: "#fff", }, 500);			   	
	}
);

$('.pdf').hover(
	function(){
	    $( this ).animate({ 'fontSize': "+=10px", 'marginTop': "-=5px", color: '#5ea3e0',}, 400);
	}, function(){
	    $( this ).animate({ 'fontSize': "-=10px", 'marginTop': "+=5px", color: '#FFF'}, 400);	
	}
);

$('.word').hover(
	function(){
	    $( this ).animate({ 'fontSize': "+=10px", 'marginTop': "-=5px", color: '#5ea3e0',}, 400);
	}, function(){
	    $( this ).animate({ 'fontSize': "-=10px", 'marginTop': "+=5px", color: '#FFF'}, 400);	
	}
);

$('.github').hover(
	function(){
	    $( this ).animate({ 'fontSize': "+=10px", 'marginTop': "-=5px", color: '#5ea3e0',}, 400);
	}, function(){
	    $( this ).animate({ 'fontSize': "-=10px", 'marginTop': "+=5px", color: '#FFF'}, 400);	
	}
);

$('.linkedin').hover(
	function(){
	    $( this ).animate({ 'height': "+=10px", 'marginTop': "-=5px", color: '#5ea3e0',}, 400);
	}, function(){
	    $( this ).animate({ 'height': "-=10px", 'marginTop': "+=5px", color: '#FFF'}, 400);	
	}
);