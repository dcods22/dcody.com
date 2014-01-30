var indexController = angular.module('indexController', []);

indexController.controller('IndexController', function IndexController($scope){

	$scope.bios = [
		{
			desc: "I student at Marist College, where I am currently studying Computer Science and minoring in Information Technology.",
		},
		
		{
			desc: "I grew up on Long Island where I love to play sports, go to the beach and hang out with my friends. ",
		},
		
		{
			desc: "I currently work on campus at Resnet as a computer technician; where I install networking software as well as fix viruses and hardware issues.",
		},
		
		{
			desc: "I worked this past summer at IBM Level 2 z/OS support.  Where I write, maintain, and update REXX, Java, and Lotus tools to help with debugging on the mainframe.",
		},
		
		{
			desc: "You can learn more about me in the About Me tab.",
		},
	];

	$scope.goals = [
		{
			desc: "I am currently a Junior at Marist College, where I am trying to obtain an internship in a technical field or a business where I can learn the way a business is run from the bottom up.",
		},
		
		{
			desc: "I have taken a lot of technical classes and I also have learned a lot on my own. ",
		},
			
		{
			desc: "You can find a copy of my resume on the Resume tab.",
		},
	];

});