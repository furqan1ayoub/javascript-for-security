// 1) access the elements
const inputName = document.querySelector("#name")
const inputPwd = document.querySelector("#pwd")
const submitBtn = document.querySelector("#submit")

const unameMsg = document.querySelector(".uname-Msg")
const pwdMsg = document.querySelector(".pwdMsg")
function nameValidtor(){
	inputNameValue = inputName.value
	// using regex function
	if (!(/[0-9]/.test(inputNameValue))){
		if (inputNameValue.length > 5){
			unameMsg.innerText = inputNameValue + " " + "Welcome"
			unameMsg.style.color = "Yellow"
			return true
		}else{
			unameMsg.innerText = "Useranem is less than 5 characters"
			return false
		}
	}else{
		unameMsg.innerText = "Enter Your Name not Numbers"
		return false
	}
}

function pwdValidtor(){
	pwdValue = inputPwd.value
	let pwdStrength = "weak"
	pwdMsg.style.color = "white"
	// 
	if(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(pwdValue)){
		if (pwdValue.length >8){
			pwdMsg.innerText = "Strong"
			pwdMsg.style.color = "green"
			return true
		}else if(pwdValue.length<8 && pwdValue.length > 5){
			pwdMsg.innerText = "Medium"
			return true
		}else{
			pwdMsg.innerText = "Weak"
			return false
		}
	}else{
		pwdMsg.innerText="Enter a Password containg Large , Small both Alphabets,Numbers & more than 5 letters "
		return false
	}
}
inputName.addEventListener("input",nameValidtor)
inputPwd.addEventListener("input",pwdValidtor)

submitBtn.addEventListener("click",()=>{
	const isNameValid = nameValidtor()
    const isPwdValid = pwdValidtor()

    if(isNameValid && isPwdValid){
		confirm("Are You Sure")
        alert("Thanks for registering----")
		inputName.value = ""
		inputPwd.value = ""
		unameMsg.innerText = ""
		pwdMsg.innerText = ""

    } else {
        console.log("Check Again")
    }
})