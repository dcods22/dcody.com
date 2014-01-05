<!DOCTYPE html>
<html lang="en" data-ng-app="aboutController">
	
	<?php
		include('lib/template/head.php');
	?>
	
	<div data-ng-controller='AboutController'>
	
	<script src='scripts/javascript/aboutController.js' type='text/javascript'></script>

	<br/>
	<div class='searchBar'>Search: <input type='text' name='search' class='searchAbout' ng-model='search' placeholder='Search About Me' /></div>
	
	<h3>Honors:</h3>	
		<ul class='subjectHolder'>
			<li ng-repeat="honor in honors | filter:search" class='aboutSubject'>{{honor.name}}</li>
		</ul>
		
	<h3>Skills:</h3>
		<ul class='subjectHolder'>
			<li ng-repeat="skill in skills | filter:search" class='aboutSubject'>{{skill}}</li>
		</ul>
	   
	<h3>Interests:</h3>	
		<ul class='subjectHolder'>
			<li ng-repeat="interest in interests | filter:search" class='aboutSubject'>{{interest}}</li>
		</ul>
			
	<h3>Activities:</h3>
		<ul class='subjectHolder'>
		    <li ng-repeat="activity in activities | filter:search" class='aboutSubject'>{{activity}}</li>
		</ul>
	</div>

	<?php
		include('lib/template/footer.html');
	?>