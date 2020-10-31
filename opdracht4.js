
	var tafel = prompt("Type in your desired table.");
	var max = 11;
	if (isNaN(tafel)) {
		alert("Please enter a number.");
		location.reload();
	} 
	else{
		if (tafel < max && tafel >0) {
			for(var j = 1; j <= tafel; j++) {
				for (var i = 1; i <= 10; i++) { 
					document.write((j) + " x " + (i) + " = " + ((j) * (i)) + "<br>" + "<br>"); 
				}
			}
		}
		else {
			alert("Range of number must be: 1 to 10.");
			location.reload();
		}
	} 	
			