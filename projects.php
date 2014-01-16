<!DOCTYPE html>
<html lang="en" data-ng-app="projectsController">
	
	<?php
		include('lib/template/head.php');
	?>
	
	<div data-ng-controller='ProjectsController'>
	
	<script src='scripts/javascript/projectsController.js' type='text/javascript'></script>

	<ul>
		<div ng-repeat="project in projects" class="project">
			<a href="{{project.link}}"><img src="{{project.image}}" alt={{project.name}} class="projectsPic"/><h3>{{project.name}}</a></h3></li>
			{{project.desc}}
		</div>
	</ul>
				
	<?php
		include('lib/template/footer.html');
	?>