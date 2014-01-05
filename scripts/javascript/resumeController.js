var resumeController = angular.module('resumeController', []);

resumeController.controller('ResumeController', function ResumeController($scope){

	$scope.education = [
		{
			name: 'Marist College, School of Computer Science and Mathematics	 Poughkeepsie, NY',
			
			info: 'Bachelor of Science in Computer Science, Minor in Information Technology 	Expected Graduation: May 2015',
		
			gpa: 'Major GPA: 3.41/4.00; Cumulative GPA: 3.21/4.00'
		}
	];
	
	$scope.skills = [
		{
			name: 'Relevant Classes:',
			
			info: 'Computer Science I & II, Web Programming I & II, Language Study, C++ Programming, Assembly Language Programming, IT\ITS Concepts, Logic Design, Data Communications, Advanced Data Structures, Enterprise Computing, Theory of Programming Languages, Internetworking, Software Development'
			
		},
		
		{
			name: 'Technical Skills:',
			
			info: 'Experienced with Windows, Linux, Mac, and IOS Operating Systems; Knowledge in Java, HTML5, CSS3, PHP, MySQL, Mainframe, C++,  JavaScript, jQuery, AngularJS, AJAX, z/OS, ISPF, TSO, Git, IPCS, XML, SML, REXX and Assembly Language'
			
		}
		
	];

	$scope.experience = [
		{
			name: 'IBM Level 2 z/OS Co-op	Poughkeepsie, NY Programmer	Summer 2013',
			
			
		}
	
	];
	
	$scope.honors = [
		{
			name: 'Eagle Scout Award Recipient: ', 
		
			info: 'Highest achievement in Boy Scouts of America'
		},
		
		{
			name: '',
			
			info: 'Community Service +150 Hours Annually: Boy Scout events, Good Samaritan Hospital, American Legion Post 94'
		
		},
		
		{
			name: '',
		
			info: 'DECA All Long Island Award Winner in Marketing Mathematics (2011)'
		}
	];
	
});