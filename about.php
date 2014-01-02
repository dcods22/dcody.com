<?php
	include('lib/template/head.php');
?>
	<h3>Honors:</h3>	
		<div ng-init="
		
		honors = ['Eagle Scout from Boy Scouts of America', '150+ Hours Community Service', 'DECA All Long Island Award Winner in Marketing Mathematics (2011)', 'All League Athlete: Soccer, and Baseball', 'Varsity Captain of Soccer: 09, 10', 'Varsity Captain of Baseball: 11'];
		
		skills = ['Java', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript', 'C++', 'jQuery', 'AngularJS', 'Git', 'z/OS', 'Mainframe', 'REXX', 'TSO', 'ISPF', 'IPCS', 'SML', 'Assembly', 'Mac OS', 'Windows OS', 'Linux', 'IOS'];
		
		interests = ['Sports', 'Beach', 'Reading', 'Working Out'];
	
		activities = ['Circle K Society', 'Computer Society', 'Security Club', 'Campus Ministry', 'Intramurals', 'Soccer', 'Baseball', 'Basketball', 'Hockey'];
	
		"></div>
		<ul>
			<li ng-repeat="honors in honors">{{honors}}</li>
		</ul>
		   
	<h3>Skills:</h3>
		<ul>
			<li ng-repeat="skills in skills">{{skills}}</li>
		</ul>
	   
	<h3>Interests:</h3>	
		<ul>
			<li ng-repeat="interests in interests">{{interests}}</li>
		</ul>
			
	<h3>Activities:</h3>
		<ul>
		    <li ng-repeat="activities in activities">{{activities}}</li>
		</ul>

<?php
	include('lib/template/footer.php');
?>