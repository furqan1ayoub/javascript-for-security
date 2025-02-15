// 1st ) countdown
const btn1 = document.querySelector("#Cd-btn1")
const textNo = document.querySelector("#count-no")
const btn2 = document.querySelector("#Cd-btn2")

let trackingValue = 0


function themeChanger(){
	if (trackingValue == 0 || trackingValue % 2 ==0 ){
		document.body.classList.add("themeBlack")
		
	}else{
		document.body.classList.remove("themeBlack")
	}
}

function incrementV(){
	trackingValue+=1
	textNo.innerText = trackingValue
	themeChanger()
}
function decrementV(){
	if(trackingValue > 0){
		trackingValue-=1
		textNo.innerText = trackingValue
		themeChanger()
	}

}
btn1.addEventListener(("click"),decrementV)
btn2.addEventListener(("click"),incrementV)


// 2nd) Reset Btn

const rstBtn = document.querySelector("#rst-btn")

function rstCdn(){
	trackingValue = 0
	textNo.innerText = trackingValue
}

rstBtn.addEventListener(("click"),rstCdn)


// 3rd) Dark theme -> if odd , white theme -> if 0 or odd

const themeBtn = document.querySelector("#theme-btn")

themeBtn.addEventListener(("click"),themeChanger)