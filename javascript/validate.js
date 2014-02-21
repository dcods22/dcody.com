$(document).ready(function () {
	$("#emailForm").submit(function ( event ) {
		if(nametotal != 1)
		{	
			$(".errorHolder").empty();
			$(".errorHolder").append("There is an with your name.  Please make sure all fields are highlited green.").show('slow');
			$("#slide4").css("padding-bottom", 140);
			event.preventDefault();
		}
		else if(emailtotal != 1)
		{	
			$(".errorHolder").empty();
			$(".errorHolder").append("There is an error with your email.  Please make sure all fields are highlited green.").show('slow');
			$("#slide4").css("padding-bottom", 140);
			event.preventDefault();
		}
		else if(subjecttotal != 1)
		{	
			$(".errorHolder").empty();
			$(".errorHolder").append("There is an error with your subject.  Please make sure all fields are highlited green.").show('slow');
			$("#slide4").css("padding-bottom", 140);
			event.preventDefault();
		}
		else if(messagetotal != 1)
		{	
			$(".errorHolder").empty();
			$(".errorHolder").append("There is with your message.  Please make sure all fields are highlited green.").show('slow');
			$("#slide4").css("padding-bottom", 140);
			event.preventDefault();
		}
	});

});

$(document).ready(function () {	
	$("#nameForm").blur(function () {
		var value = $( this ).val();
		if(value=='')
		{
			$( this ).css( "border-color", "#ff6666" );
			if(nametotal > 0){
				formtotal--;
				nametotal = 0;
			}
		}else{
			if(nametotal < 1){
				formtotal++;
				nametotal = 1;
			}
			$( this ).css( "border-color", "#9AFF9A" );
		}
	});
});

$(document).ready(function () {	
	$("#email").blur(function () {
		var value = $( this ).val();
		if(validateEmail(value) == false)
		{
			$( this ).css( "border-color", "#ff6666" );
			if(emailtotal > 0){
				formtotal--;
				emailtotal = 0;
			}
		}else{
			if(emailtotal < 1){
				formtotal++;
				emailtotal = 1;
			}
			$( this ).css( "border-color", "#9AFF9A" );
		}
	});
});

$(document).ready(function () {	
	$("#subject").blur(function () {
		var value = $( this ).val();
		if(value=='')
		{
			$( this ).css( "border-color", "#ff6666" );
			if(subjecttotal > 0){
				formtotal--;
				subjecttotal = 0;
			}
		}else{
			if(subjecttotal < 1){
				formtotal++;
				subjecttotal = 1;
			}
			$( this ).css( "border-color", "#9AFF9A" );
		}
	});
});

$(document).ready(function () {	
	$("#message").blur(function () {
		var value = $( this ).val();
		if(value=='')
		{
			$( this ).css( "border-color", "#ff6666" );
			if(messagetotal > 0){
				formtotal--;
				messagetotal = 0;
			}
		}else{
			if(messagetotal < 1){
				formtotal++;
				messagetotal = 1;
			}
			$( this ).css( "border-color", "#9AFF9A" );
		}
	});
});

function validateEmail(email)
{
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
		return false;
	}
}