// takes a single string parameter and searches for all the numbers 
// in the string, adds them together, then returns the sum 
// NOTE: if two or more numbers are together, that is the number
// for example: isj88jsdf3 - the total is 91 not 19 
function addNumbers(str) {
	var total = 0;
	var runningNumAsStr = '';

	for (var i = 0; i < str.length; i++) {
		if (!isNaN(str[i])) {
			runningNumAsStr += str[i];
		}
		else if (runningNumAsStr != '') {
			total += parseInt(runningNumAsStr);
			runningNumAsStr = '';
		}
		if (i === str.length - 1 ) {
			if (runningNumAsStr != '') {
				total += parseInt(runningNumAsStr);
			}
		}
	}
	return total;
}

console.log("jdj3jakdf33jadfaf9add41ygf - adds up to: ", addNumbers("jdj3jakdf33jadfaf9add41ygf"));
console.log("55Hello - adds up to: ", addNumbers("55Hello"));
console.log("55Hello15 - adds up to: ", addNumbers("55Hello15"));
console.log("5Hello5 - adds up to: ", addNumbers("5Hello5"));