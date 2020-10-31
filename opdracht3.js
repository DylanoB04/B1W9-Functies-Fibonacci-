
function opdracht3(name, age) {
	document.write("Hallo " + name + ", je leeftijd is " + age + " jaar oud." + "<br>");
}

var name = prompt("What is your name?");
var age = prompt("What is your age?");

while(name, age != "stop") {
	opdracht3(name, age);
	name = prompt("What is your name?");
	age = prompt("What is your age?");
}