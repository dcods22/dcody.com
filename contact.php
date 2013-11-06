<?php
	include('lib/template/head.php');


?>
	<script src='scripts/javascript/validate.js' type="text/javascript"></script>	

	<form action="scripts/php/email.php" method="POST">  
		
		<input type="text" name="name" placeholder='Name'/><br/><br/>
		<input type="text" name="email" placeholder='Email'/><br/><br/>
		<input type="text" name="subject" placeholder='Subject'/><br/><br/>
		<textarea name = "message" rows = "4" placeholder='Message'></textarea><br/><br/>

		<input type="submit" onclick="validate()" = "send" value = "Send" /><input type="reset" value="Clear" />
		  
	</form>
				
<?php
	include('lib/template/footer.php');
?>