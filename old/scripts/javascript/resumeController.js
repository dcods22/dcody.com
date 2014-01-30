var resumeController = angular.module('resumeController', []);

resumeController.controller('ResumeController', function ResumeController($scope){

	$scope.education = [
		{
			name: 'Marist College, School of Computer Science and Mathematics	 Poughkeepsie, NY',
			
			info: 'Bachelor of Science in Computer Science, Minor in Information Technology 	Expected Graduation: May 2015',
		
			gpa: 'Major GPA: 3.41/4.00; Cumulative GPA: 3.21/4.00',
		},
	];
	
	$scope.skills = [
		{
			name: 'Relevant Classes:',
			
			info: 'Computer Science I & II, Web Programming I & II, Language Study, C++ Programming, Assembly Language Programming, IT\ITS Concepts, Logic Design, Data Communications, Advanced Data Structures, Enterprise Computing, Theory of Programming Languages, Internetworking, Software Development',
	
		},
		
		{
			name: 'Technical Skills:',
			
			info: 'Experienced with Windows, Linux, Mac, and IOS Operating Systems; Knowledge in Java, HTML5, CSS3, PHP, MySQL, Mainframe, C++,  JavaScript, jQuery, AngularJS, AJAX, z/OS, ISPF, TSO, Git, IPCS, XML, SML, REXX and Assembly Language',
			
		},
		
	];

	$scope.experience = [
		{
			company: 'IBM',
			
			location: 'Poughkeepsie, NY',
			
			time: 'Summer 2013',
			
			title: 'Level 2 z/OS Co-op Programmer',
			
			bullet1: 'Implemented, developed, maintained, and updated REXX, Java, and Lotus tools',
			
			bullet2: 'Used the mainframe to run and update code, as well as debugged mainframe dumps using REXX tools',
			
			bullet3: 'Part of an intern team which worked on various projects to help Level 2 debuggers ',
		
		},
		
		{
			company: 'CampusLoops LLC',
			
			location: 'West Babylon, NY',
			
			time: 'Fall 2013-Current',
			
			title: 'CEO and Programmer',
			
			bullet1: 'Designed, planned and managed a website startup company',
			
			bullet2: 'Currently beta testing with expected test launch to Marist College in late Fall 2013 ',
			
		},
		
		{
			company: 'Resnet',
			
			location: 'Poughkeepsie, NY',
			
			time: 'Fall 2013-Current',
			
			title: 'Networking Technician',
			
			bullet1: 'Implemented and install VPN programs to establish connection to the Marist Network',
			
			bullet2: 'Provide technical support to the students, faculty and staff of Marist College',
			
			bullet3: 'Solve software and hardware related issues using the command prompt',
		},
		
		{
			company: 'KrowdByz',
			
			location: 'Seattle, Washington',
			
			time: 'Winter 2012-Spring 2013',
			
			title:'Developer and Programmer Intern',
			
			bullet1: 'Developed and scripted PHP tools using PHP Curl for other companies and websites.  ',
			
			bullet2: 'Grabbed data, as well as did website functions using our scripts hosted on our own servers',
		},
		
		{
			company: 'TTNG',
			
			location: 'Queens, NY',
			
			time: 'Winter 2012-Spring 2013',
			
			title: 'Developer and Programmer Intern',
			
			bullet1: 'Created and planed the front end of the website with HTML, CSS and JavaScript',
			
			bullet2: 'Coded the backend of the website with PHP and MySQL to create a user login and other features',
			
		},
		
		{
			company: 'Marist Institute of Public Opinion',
			
			location: 'Poughkeepsie, NY',
			
			time: 'Spring 2012-Winter 2012',
			
			title: 'Interviewer and Researcher',
			
			bullet1: 'Researcher calling people to answer polls and other surveys to help gather demographic information about issues that face people in their local communities',
			
			bullet2: 'Form statistics that are used by The Wall Street Journal, MSNBC, NBC, and many other political institutions',
			
		},
		
		{
			company: 'Robert Moses State Park',
			
			location: 'Babylon, NY',
			
			time: 'Summer 2012',
			
			title: 'Supervisor of Tolls Department',
			
			bullet1: 'Supervised Tolls Department at Robert Moses State Park which included recording and accounting for daily park revenues of up to $45,000 per day',
			
		},
		
		
	
	];
	
	$scope.honors = [
		{
			name: 'Eagle Scout Award Recipient: ', 
		
			info: 'Highest achievement in Boy Scouts of America',
		},
		
		{
			name: '',
			
			info: 'Community Service +150 Hours Annually: Boy Scout events, Good Samaritan Hospital, American Legion Post 94',
		
		},
		
		{
			name: '',
		
			info: 'DECA All Long Island Award Winner in Marketing Mathematics (2011)',
		},
	];
	
});