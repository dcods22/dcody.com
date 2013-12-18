<?php
	include('lib/template/head.php');
?>
	<script src='scripts/javascript/validate.js' type="text/javascript"></script>	
	<script>
		var formtotal = 0;
		var nametotal = 0;
		var emailtotal = 0;
		var subjecttotal = 0;
		var messagetotal = 0;
		
		angular.filter('newlines', function(text){
			return text.replace(/\n/g, '<br/>');  
		});	
	</script>
	<h3>Contact Information</h3>
	<b>Email:</b> Daniel.Cody2@Marist.edu<br/><br/>
	<b>Phone:</b> (631) 365-9940
	<h3>Contact Form</h3>
	<form action="scripts/php/email.php" method="POST" id='emailForm'> 
		<input type="text" name="name" id='nameForm' ng-model="nameForm" placeholder='Name'/><br/><br/>
		<input type="text" name="email" id='email' ng-model="emailForm"placeholder='Email'/><br/><br/>
		<input type="text" name="subject" id='subject' ng-model="subjectForm"placeholder='Subject'/><br/><br/>
		<textarea name = "message" id='message' rows = "4" ng-model="messageForm"placeholder='Message'></textarea><br/><br/>

		<input type="submit" onclick="validate()" = "send" value="Send" /><input type="reset" value="Clear" />
		  
	</form>
	
	<div class='emailPrev'>
		<div class='emailPrevFont'>
			<b>From:</b> {{emailForm}}<br/>
			<b>Subject:</b> {{subjectForm}}<br/>
			<b>Message:</b><br/><pre> {{messageForm}}  </pre>
			
			Sincerely,<br/>
			{{nameForm}}
		</div>
	</div>
	<br/><br/>
<?php
	include('lib/template/footer.php');
?>