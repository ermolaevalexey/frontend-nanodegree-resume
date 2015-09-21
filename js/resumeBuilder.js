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

$("#header").prepend(formattedName, formattedRole);


/*var str1 = "audacity";
var str2 = str1.slice(1);
console.log( str2.replace("u", "U") );*/

var arr = [1,2,3];
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
	console.log( i +" "+arr[i]);
}