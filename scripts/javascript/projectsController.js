var projectsController = angular.module('projectsController', []);

projectsController.controller('ProjectsController', function ProjectsController($scope){

	$scope.projects = [
		
		{
			image: "images/campusloops.png",
			
			link: "http://campusloops.com",
			
			name: "Campus Loops",
			
			desc: "Start up website and company created by myself and two classmates.  Social Media website designed to connect all people on a college campus ",
		
		},

		{
			image: "images/collegecrux.png",
			
			link: "http://collegecrux.com",
			
			name: "College Crux",
			
			desc: "Start up website and company created by myself and a classmate.  Goal is to put all college information on one site to help kids looking to attend college research about colleges.",
		
		},	

		{
			image: "images/wer.png",
			
			link: "http://foxweb.marist.edu/users/kgdjc/Wer/",
			
			name: "Wildlife Ecology Research",
			
			desc: "This is my website that I re-designed for my web programming class.  We took a working website for a company and re-designed to and submitted our finished products to the company.",
		
		},			
	];
});