var number1 = 0;
var number2 = 1;
var storage;

function  fibonacci(number) {
	for(i = 0; i < number; i++) {
		storage = number1 + number2;
		number1 = number2;
		number2 = storage;
		document.write(storage + "<br>");
		//document.write(storage + "<br>");
	}
}
fibonacci(20);

