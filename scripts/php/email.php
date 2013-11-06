<?php
	$to = 'daniel.cody2@marist.edu';
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$name = $_POST['name'];
	$formcontent = "From: $name \n Message: $message";
	$email = $_POST['email'];
	$headers = "From: $email \r\n";
	echo $to;
	echo $subject;
	echo $formcontent;
	echo $headers;
	mail($to, $subject, $formcontent, $headers);
	header('Location: http://dcody.com');
?>