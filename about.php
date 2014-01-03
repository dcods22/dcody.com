<?php
	include('lib/template/head.php');
?> 
	
	<div ng-init=" 
		
		honors = [{name:'Eagle Scout from Boy Scouts of America'}, {name:'150+ Hours Community Service'}, {name:'DECA All Long Island Award Winner in Marketing Mathematics (2011)'}, {name:'All League Athlete: Soccer, and Baseball'}, {name:'Varsity Captain of Soccer: 09, 10'}, {name:'Varsity Captain of Baseball: 11'}];
		
		skills = ['Java', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript', 'AngularJS ', 'C++', 'jQuery', 'AngularJS', 'Git', 'z/OS', 'Mainframe', 'REXX', 'TSO', 'ISPF', 'IPCS', 'SML', 'Assembly', 'Mac OS', 'Windows OS', 'Linux', 'IOS'];
		
		interests = ['Sports', 'Beach', 'Reading', 'Working Out'];
	
		activities = ['Circle K Society', 'Computer Society', 'Security Club', 'Campus Ministry', 'Intramurals', 'Soccer', 'Baseball', 'Basketball', 'Hockey'];
	
		">
	</div>
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

<?php
	include('lib/template/footer.php');
?>