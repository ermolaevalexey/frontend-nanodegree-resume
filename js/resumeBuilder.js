/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	name: 'Alexey Ermolaev',
	role: 'Web Developer',
	contacts : {
		mobile : "+7 (911) 034 62 37",
		email: "descendended@gmail.com",
		github: "https://github.com/ermolaevalexey",
		twitter : "@ermolaevalexey",
		location: "Saint-Petersburg"
	},
	welcomeMessage: "Hello to all!",
	skills: ["web developing", "HTML", "CSS", "JavaScript", "PHP", "JQuery", "SASS", "basic Java"],
	biopic : "images/bio.jpg",
	display : function() {
		return true;
	}
};

var work = {
	"jobs" : [

		{ 
			"employer"    : "Apex LLC",
			"title"	      : "Web developer/web master",
			"location"    : "Saint-Petersburg, Naberezhnaya Chornoi Rechki st., 15",
			"dates" 	  : "July 2015 - until now",
			"description" : "Technical support of clients' websites, developing modules of sites, integration of JS-plug-ins, web server config, etc."
		},

		{ 
			"employer"    : "Webdynamika (Network Information Technology Co., Ltd)",
			"title"	      : "HTML coder/frontend web developer",
			"location"    : "Saint-Petersburg, Naberezhnaya reki Smolenki st., 14",
			"dates" 	  : "September 2014 — July 2015",
			"description" : "Creating websites and landing pages, e-shops, corporate websites, including html coding, template integration with CMS, setting up JavaScript plug-ins, creating and editing modules for websites on PHP language. Creating dynamic web pages using native JavaScript and JQuery, setting up AJAX web-forms, etc. Setting up and configurating Apache and Nginx web servers. Used to work with such popular CMS, like Joomla!, Wordpress, Drupal, 1c-Bitrix, etc."
		},

		{ 
			"employer"    : "Saint-petersburg University Of The Humanities And Social Sciences",
			"title"	      : "Website administrator/web master/website editor",
			"location"    : "Saint-Petersburg, Fuchika st., 15",
			"dates" 	  : "March 2013 — June 2014",
			"description" : "Technical support of the University's website. Setting up the server. Setting up the website's frontend - templates integration, setting up JavaScript plug-ins, creating modules, php template editing, occasional content managment."
		}

	]

};

var education = {
	"schools" : [
			{
			  "name"	 : "Saint-petersburg University Of The Humanities And Social Sciences",
        	  "location" : "Saint-Petersburg, Fuchika st., 15",
        	  "degree" 	 : "Higher",
        	  "majors"   : ["Direction of Multimedia Programs"],
        	  "dates"    : 2012,
        	  "url"      : "http://gup.ru/"
			}
	
		],
	"onlineCourses" : [
		    {
			  "title"   : "JavaScript Crash Course",	
			  "school"  : "Udacity",
			  "dates"   : 2015,
			  "url"     : "https://www.udacity.com"
		    },

		    {
			  "title"   : "Java: Базовый курс",	
			  "school"  : "Stepic",
			  "dates"   : 2015,
			  "url"     : "https://stepic.org"
		    },

		    {
			  "title"   : "Algorithms: Design and Analysis, Part 1",	
			  "school"  : "Coursera",
			  "dates"   : 2015,
			  "url"     : "https://www.coursera.org/"
		    }

		]		 
};

var projects = [
		
	{
		"title"		  : "MCRM",
        "dates"		  : "March 2015 - April 2015",
        "description" : "Creating responsive grid for the site",
        "images"      : [

        	"images/mcrm1.jpg",
        	"images/mcrm2.jpg"

        ],
		display : function() {
			return true;
		}
	},

	{
		"title"		  : "Candles Tuliniekka",
        "dates"		  : "April 2015 - June 2015",
        "description" : "Creating Suomi candles e-shop",
        "images"      : [

        	"images/candles1.jpg",
        	"images/candles2.jpg"

        ],
		display : function() {
			return true;
		}
	},

	{
		"title"		  : "World Fitness Camp",
        "dates"		  : "April 2015 - May 2015",
        "description" : "Creating landing for fitness camp",
        "images"      : [

        	"images/fit1.jpg",
        	"images/fit2.jpg"

        ],
		display : function() {
			return true;
		}
	},

];




var displayNameConts = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name.replace(/<|\>/g, '') );
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").prepend(formattedName, formattedRole);
	for (var prop in bio.contacts){
		var formattedGen = HTMLcontactGeneric.replace("%contact%", prop);
		var formattedContVal = formattedGen.replace("%data%", bio.contacts[prop]);
		$("#header #topContacts").append(formattedContVal);
	}
	var welMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedPic);
	$("#header").append(welMsg);
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);		
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
			$("#header #skills").append(formattedSkills);
		}
	} else {
		$("#header #skills").append('You\'ve got no any skills!');
	}
};

var displayWork = function() {
	for (var job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
	
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedWorkLoc = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedWorkLoc);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
};

var displayProjs = function() {
	for (var project in projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedPrTitle = HTMLprojectTitle.replace('%data%', projects[project].title);
		var formattedPrDates = HTMLprojectDates.replace('%data%', projects[project].dates);
		var formattedDesc = HTMLprojectDescription.replace('%data%', projects[project].description);

		$('.project-entry:last').addClass(projects[project].title.replace(/\s/g, ''));
		$('.project-entry:last').append(formattedPrTitle);
		$('.project-entry:last').append(formattedPrDates);
		$('.project-entry:last').append(formattedDesc);
		for (var i = 0; i < projects[project].images.length; i++) {
			var formattedImg = HTMLprojectImage.replace('%data%', projects[project].images[i]);
			$('.project-entry:last').append(formattedImg);
		}
	}
};

var displayEdu = function() {

	for (var edu in education.schools){
		$('#education').append(HTMLschoolStart);

		var formattedScTitle = HTMLschoolName.replace('%data%', education.schools[edu].name);
		var formattedSchool = formattedScTitle.replace('#', education.schools[edu].url);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[edu].degree);
		var formattedSchoolHeader = formattedSchool + formattedDegree;
		var formattedScDates = HTMLschoolDates.replace('%data%', education.schools[edu].dates);
		var formattedScLoc = HTMLschoolLocation.replace('%data%', education.schools[edu].location);

		
		$('.education-entry:last').append(formattedSchoolHeader);
		$('.education-entry:last').append(formattedScDates);
		$('.education-entry:last').append(formattedScLoc);
		for (var major in education.schools[edu].majors){
			var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[edu].majors[major]);
			$('.education-entry:last').append(formattedMajor);
		}
		//$("#education").append('<div class="education-entry"><a href="'+education.schools[edu].url+'">'+education.schools[edu].name+'</a>'+'<div class="date-text">'+education.schools[edu].dates+'</div>'+'</div>');
	}

	$("#education").append('<br/>'+HTMLonlineClasses);

	for (var course in education.onlineCourses){
		$('#education').append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		var formattedOnlineCourse = formattedOnlineTitle.replace('#', education.onlineCourses[course].url);
		var formattedOnlSchoolName = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		var formattedOnlSchoolFull = formattedOnlineCourse+formattedOnlSchoolName;
		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		var formattedOnlineUrl = HTMLonlineURL.replace('#', education.onlineCourses[course].url);
		var formattedOnlineUrlFull = formattedOnlineUrl.replace('%data%', education.onlineCourses[course].url);
		$('.education-entry:last').append(formattedOnlSchoolFull);
		$('.education-entry:last').append(formattedOnlineDates);
		$('.education-entry:last').append(formattedOnlineUrlFull);
		//$("#education").append('<div class="education-entry">'+'<a href="'+education.onlineCourses[course].url+'">'+education.onlineCourses[course].title+' - '+education.onlineCourses[course].school+'</a>'+'<div class="date-text">'+education.onlineCourses[course].dates+'</div>'+'<br/><a href="'+education.onlineCourses[course].url+'">'+education.onlineCourses[course].url+'</a>'+'</div>');
	}
};

displayNameConts();
displayWork();
displayProjs();
displayEdu();






