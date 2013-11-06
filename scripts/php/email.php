<?php
	$to = 'miniposada20@optonline.net';
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$name = $_POST['name'];
	$formcontent = "From: $name \n Message: $message";
	$email = $_POST['email'];
	$headers = "From: $email \r\n";
	mail($to, $subject, $formcontent, $headers);
?>