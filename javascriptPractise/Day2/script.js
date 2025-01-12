//1)Ask Input from User if a no is divisible by 5 or not!!!!
// using prompt 
let userInput = prompt("Give Your Number")
console.log(typeof (userInput)) // it gives a string

// so we neeed to convert it ==========> parseInt()
userInput = parseInt(userInput)
//console.log("Changed........", typeof (userInput))

// isNaN -> is a methods to check a data is a not a nmber (True) or if is(False)....It return -> True/False
// ! => inverse true to false and false to true

//using both
if (!isNaN(userInput)) { // if it is not string -> false to true convert and do this 
	if (userInput / 5 == 0) {
		console(`${userInput} is divisble by 5....`)
	}
	else {
		console.log(`${userInput} is not divisble by 5....`)
	}
}
else {
	console.log("Kindly Give a Number \n - Invalid Input")
}


//q2) user input -> short
sMarks = prompt("Enter Your Marks to Check  ")
sMarks = parseInt(sMarks)

if(!isNaN(sMarks)){
	if ((sMarks <= 100) && (sMarks >= 60)){
		console.log("Good Job...\n Passed with Good Marks")
	}else if ((sMarks < 60) && (sMarks >= 40)){
		console.log("Passed...\n Need to do Hardwork.")
	}else{
		console.log("Fail.....")
	}
}else{
	console.log("Enter valid Marks...")
}