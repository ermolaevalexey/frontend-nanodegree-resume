/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Alexey Ermolaev";
var role = "Web Developer";

var formattedName, formattedRole;

formattedName = HTMLheaderName.replace("%data%", name);

formattedRole = HTMLheaderRole.replace("%data%", role);

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

$("#header").prepend('<h1 id="name">'+bio.name.replace(/<|\>/g, '')+'</h1>', '<span>'+bio.role+'</span><hr/>');

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);


for (var prop in bio.contacts){

	$("#header #topContacts").append('<li class="flex-item"><span class="orange-text">'+prop+'</span>'+bio.contacts[prop]+'</li>');

}

var welMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedPic);

$("#header").append(welMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (var i = 0; i < bio.skills.length; i++) {
	
		$("#header #skills").append('<li class="item"><span class="white-text">'+bio.skills[i]+"</span></li>");
	
	}

} else {
	$("#header").append('You\'ve got nothing, sucker!');
}



var work = {
	"jobs" : [

		{ 
			"employer"   : "Webdynamika (Network Information Technology Co., Ltd)",
			"title"	    : "HTML coder/frontend web developer",
			"location"    : "Saint-Petersburg",
			"dates" 	    : "September 2014 — until now",
			"description" : "Creating websites and landing pages, e-shops, corporate websites, including html coding, template integration with CMS, setting up JavaScript plug-ins, creating and editing modules for websites on PHP language. Creating dynamic web pages using native JavaScript and JQuery, setting up AJAX web-forms, etc. Setting up and configurating Apache and Nginx web servers. Used to work with such popular CMS, like Joomla!, Wordpress, Drupal, 1c-Bitrix, etc."
		},

		{ 
			"employer"    : "Saint-petersburg University Of The Humanities And Social Sciences",
			"title"	      : "Website administrator/web master/website editor",
			"location"    : "Saint-Petersburg",
			"dates" 	  : "March 2013 — June 2014",
			"description" : "Technical support of the University's website. Setting up the server. Setting up the website's frontend - templates integration, setting up JavaScript plug-ins, creating modules, php template editing, occasional content managment."
		}

	]

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
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);

	//$('#workExperience').append('<div class="work-entry">'+'<a href="#">'+work.jobs[job].employer+' - '+work.jobs[job].title+'</a>'+'<div class="date-text">'+work.jobs[job].dates+'</div>'+'<p><br>'+work.jobs[job].description+'</p>'+'</div>');
	}
};

displayWork();


var education = {
	"schools" : [
			{
			  "name"	 : "Saint-petersburg University Of The Humanities And Social Sciences",
        	  "location" : "Saint-Petersburg",
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
		    }

		]		 
}


for (var edu in education.schools){

	$("#education").append('<div class="education-entry"><a href="'+education.schools[edu].url+'">'+education.schools[edu].name+'</a>'+'<div class="date-text">'+education.schools[edu].dates+'</div>'+'</div>');

}

$("#education").append('<br/>'+HTMLonlineClasses);

for (var course in education.onlineCourses){

	$("#education").append('<div class="education-entry">'+'<a href="'+education.onlineCourses[course].url+'">'+education.onlineCourses[course].title+' - '+education.onlineCourses[course].school+'</a>'+'<div class="date-text">'+education.onlineCourses[course].dates+'</div>'+'<br/><a href="'+education.onlineCourses[course].url+'">'+education.onlineCourses[course].url+'</a>'+'</div>');

}

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

for (var project in projects) {
	$('#projects').append('<div class="project-entry'+' '+projects[project].title.replace(/\s/g, '')+'">'+'<a href="#">'+projects[project].title+'</a>'+'<div class="date-text">'+projects[project].dates+'</div>'+'<p><br>'+projects[project].description+'</p>'+'</div>'+
			'<br/>');
	for (var i = 0; i < projects[project].images.length; i++) {
			$( '#projects .project-entry.'+projects[project].title.replace(/\s/g, '') ).append('<img src="'+projects[project].images[i]+'"/>');
	}
}
