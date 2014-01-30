var parallaxController = angular.module('parallaxController', []);

parallaxController.controller('ParallaxController', function ParallaxController($scope){
	
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

		{
			image: "images/website.png",
			
			link: "http://dcody.com/old",
			
			name: "My Original Website",
			
			desc: "This was my original website before I went to the parallax look. It is still coded in angular but has a multi page view to it.",
		
		},	
		
		{
			image: "images/jb.png",
			
			link: "http://dcody.com/J&B/index.html",
			
			name: "J&B Template",
			
			desc: "A template for a website I designed for my cousins.",
		
		},
		
		{
			image: "images/jbParallax.png",
			
			link: "http://dcody.com/J&B/parallax.html",
			
			name: "J&B Parallax",
			
			desc: "A parallax website I made from the template of the previous website I did for my cousins.",
		
		},
	];
	
	$scope.honors = [{name:'Eagle Scout from Boy Scouts of America'}, {name:'150+ Hours Community Service'}, {name:'DECA All Long Island Award Winner'}, {name:'All League Athlete: Soccer, and Baseball'}, {name:'Varsity Captain of Soccer: 09, 10'}, {name:'Varsity Captain of Baseball: 11'}];
		
	$scope.skills = ['Java', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'JavaScript', 'AngularJS ', 'C++', 'jQuery', 'Git', 'z/OS', 'Mainframe', 'REXX', 'TSO', 'ISPF', 'IPCS', 'SML', 'Assembly', 'Mac OS', 'Windows OS', 'Linux', 'IOS'];
		
	$scope.interests = ['Sports', 'Beach', 'Reading', 'Working Out'];
	
	$scope.activities = ['Circle K Society', 'Computer Society', 'Security Club', 'Campus Ministry', 'Intramurals', 'Soccer', 'Baseball', 'Basketball', 'Hockey'];

	$scope.resume = [
		{
			about: "I am currently seeking a summer internship for the Summer of 2014.  Please feel free to download my resume or look at my other work by clicking ",
		
			name: "Here is a downloadable copy of my resume and links to my LinkedIn and Github:",
			
			pdf: "resume.pdf",
			
			word: "resume.docx",
			
			desc: "If you have any questions feel free to contact me on the contacts page or by clicking",
			
			git:"images/github.png",
			
			github:"https://github.com/dcods22",
			
			linked:"images/linkedin.jpg",
			
			linkedin:"https://linkedin.com/pub/daniel-cody/59/246/341/",
	
		},
	
	];

});
