/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Alexey Ermolaev";
 var role = "Web Developer";
 //$("#main").append("Alexey Ermolaev");

//var awesomeThoughts = "I am Alexey Ermolaev and I am awesome!";

//var funThoughts = awesomeThoughts.replace("awesome", "fun");

//console.log(awesomeThoughts);
//console.log(funThoughts);

//$("#main").append("<p>"+funThoughts+"</p>");

var formattedName, formattedRole;

formattedName = HTMLheaderName.replace("%data%", name);

formattedRole = HTMLheaderRole.replace("%data%", role);



//$("#header").prepend(formattedName, formattedRole);


/*var str1 = "audacity";
var str2 = str1.slice(1);
console.log( str2.replace("u", "U") );*/

/*var arr = [1,2,3];
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
	console.log( i +" "+arr[i]);
}*/

var bio = {
	name: formattedName,
	role: formattedRole,
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

$("#header").prepend(bio.name, bio.role);

var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);


for (var prop in bio.contacts){

	//console.log( prop + ':' + bio.contacts[prop]);
	$("#header #topContacts").append('<li class="flex-item"><span class="orange-text">'+prop+'</span>'+bio.contacts[prop]+'</li>');

}

var welMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedPic);

$("#header").append(welMsg);

$("#header").append(HTMLskillsStart);

for (var i = 0; i < bio.skills.length; i++) {
	//console.log(bio.skills[i]);
	$("#header #skills").append('<li class="flex-item"><span class="white-text">'+bio.skills[i]+"</span></li>");
}

var work = {
	jobs : [

		{ 
			employer   : "Webdynamika (Network Information Technology Co., Ltd)",
			title	   : "HTML coder/frontend web developer",
			location   : "Saint-Petersburg",
			dates 	   : "September 2014 — until now",
			description: ""
		},

		{ 
			employer : "Saint-petersburg University Of The Humanities And Social Sciences",
			title	 : "Website administrator/web master/website editor",
			location : "Saint-Petersburg",
			dates 	 : "March 2013 — June 2014",
			description: ""
		}

	]

};

var education = {
	schools : [
			{
			  name: "Saint-petersburg University Of The Humanities And Social Sciences",
        	  location: "Saint-Petersburg",
        	  degree: "Higher",
        	  majors: "Direction of Multimedia Programs",
        	  dates: 2012,
        	  url: "http://gup.ru/"
			}
	
		]	 
}


for (var edu in education.schools){

	//console.log( prop + ':' + bio.contacts[prop]);
	$("#education").append('<div class="education-entry"><a href="#">'+education.schools.name+'</div>');

}