<?php
	$to = 'daniel.cody2@marist.edu';
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$name = $_POST['name'];
	$formcontent = "Message sent from dcody.com \n From: $name \n Message: $message";
	$email = $_POST['email'];
	$headers = "From: $email \r\n";
	mail($to, $subject, $formcontent, $headers);
	header('Location: http://dcody.com');
?>