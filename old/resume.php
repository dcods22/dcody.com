<!DOCTYPE html>
<html lang="en" data-ng-app="resumeController">
	
	<?php
		include('lib/template/head.php');
	?>
		
		<div data-ng-controller='ResumeController'>
	
		<script src='scripts/javascript/resumeController.js' type='text/javascript'></script>

	
		Here is a downloadable, better formatted file of my Resume: <a href = "Resume.docx">Click Here</a>
		
		<br/><br/>
		
		<span class='resName'><center>Daniel E. Cody</center></span>
		
			<center>43 Watson Avenue, West Babylon, New York 11704 <br/> Daniel.Cody2@Marist.edu  :	631-365- 9940 </center><br/>

			<hr>

			<strong>EDUCATION</strong><br/>
			<div ng-repeat="edu in education">
			
				<u>{{edu.name}}</u><br/>
				{{edu.info}}
				<br/>{{edu.gpa}}
				
			</div>
			
			<hr><strong>SKILLS</strong><br/>
			
			<div ng-repeat="skill in skills">
				<u>{{skill.name}}</u>
				<br/>{{skill.info}}<br/>
			</div>

			<hr><strong>RELEVANT EXPERIENCE</strong><br/>
			
			<div class="experience" ng-repeat="exp in experience">
				<strong>{{exp.company}}</strong><span style='float:right'>{{exp.location}}</span><br/>
				<u>{{exp.title}}</u><span style='float:right'>{{exp.time}}</span>
				
				<div>{{exp.bullet1}} </div>
				<div>{{exp.bullet2}} </div>
				<div>{{exp.bullet3}}</div>
				
			</div>
		
			<hr><strong>HONORS AND ACHIEVEMENTS</strong><br/>
			<div ng-repeat="honor in honors">
				<strong>{{honor.name}}</strong> {{honor.info}}<br/>
			</div>
		
	   
	<?php
		include('lib/template/footer.html');
	?>