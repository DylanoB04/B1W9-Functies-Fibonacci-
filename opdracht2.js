function addition(number1, number2) {
	number1 = prompt("Addition: Insert 1st number.");
	number2 = prompt("Addition: Insert 2nd number.");
	number1 = Number(number1); 
	number2 = Number(number2);
	return number1 + "+" + number2 + "=" + (number1 + number2) + "<br>"; 
}
document.write(addition());

function subtraction(number1, number2) {
	number1 = prompt("Subtraction: Insert 1st number.");
	number2 = prompt("Subtraction: Insert 2nd number.");
	number1 = Number(number1); 
	number2 = Number(number2);
	return number1 + "-" + number2 + "=" + (number1 - number2) + "<br>";
}
document.write(subtraction());

function multiplication(number1, number2) {
	number1 = prompt("Multiplication: Insert 1st number.");
	number2 = prompt("Multiplication: Insert 2nd number.");
	number1 = Number(number1); 
	number2 = Number(number2);
	return number1 + "x" + number2 + "=" + (number1 * number2) + "<br>";
}
document.write(multiplication());

function division(number1, number2) {
	number1 = prompt("Division: Insert 1st number.");
	number2 = prompt("Division: Insert 2nd number.");
	number1 = Number(number1); 
	number2 = Number(number2);
	return number1 + ":" + number2 + "=" + (number1 / number2) + "<br>";
}
document.write(division());

function increment(number) {
	number = prompt("Increment: Insert number.");
	number = Number(number);
	number1 = Number(1);
	return	number + "+" + number1 + "=" + (number + number1) + "<br>";
}
document.write(increment());

function decrement(number) {
	number = prompt("Decrement: Insert number.");
	number = Number(number);
	number1 = Number(1);
	return	number + "-" + number1 + "=" + (number - number1) + "<br>";
}
document.write(decrement());