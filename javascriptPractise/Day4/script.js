let userInput = 'furqan ayoub';
length_userInput = userInput.length
let formattedUsername = ''
if(isNaN(userInput)){
	for(char of userInput){
		if (char != ' '){
			formattedUsername+=str
		}else{
			continue
		}
		
	}
	formattedUsername = "@"+formattedUsername + length_userInput
}else{
	console.log("Enter a Valid Username")
}
console.log(formattedUsername)