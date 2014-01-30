<!DOCTYPE html>
<html lang="en" data-ng-app="indexController">
	
	<?php
		include('lib/template/head.php');
	?>
	
	<script type="text/javascript" src='scripts/javascript/slideshow.js'></script>
	
	<div data-ng-controller='IndexController'>
	
	<script src='scripts/javascript/indexController.js' type='text/javascript'></script>

	
	<center>
		<div id="carousel">
			<div id="buttons">
				<a href="#" id="prev">prev</a>
				<a href="#" id="next">next</a>
			</div>

			<div id="slides"> 
				<ul>
					<li><img src="images/me1.jpg" width="240" height="240" alt="Slide 1"/></li>
					<li><img src="images/me3.jpg" width="240" height="240" alt="Slide 2"/></li>
					<li><img src="images/me2.jpg" width="240" height="240" alt="Slide 3"/></li>
					<li><img src="images/me4.jpg" width="240" height="240" alt="Slide 4"/></li>
					<li><img src="images/me.jpg" width="240" height="240" alt="Slide 5"/></li>
				</ul>
			</div>

		</div>
	</center>
	
	<h2>Bio: </h2>
	
		<div ng-repeat="bio in bios" class="bios">
			{{bio.desc}}
		</div>
	<h2>Career Goals: </h2>

		<div ng-repeat="goal in goals" class="goals">
			{{goal.desc}}
		</div>
		
	<?php
		include('lib/template/footer.html');
	?>