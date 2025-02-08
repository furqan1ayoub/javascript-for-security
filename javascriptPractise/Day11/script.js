let headyellow = document.querySelector(".yellow")

headyellow.setAttribute("class","bg-color")

let readhead = document.querySelector(".red") // this removes the all preivous listed classes

readhead.classList.add("class","text-color") // this just adds one more No removing of any classes

// adding & removing elements 

let bothheading = document.querySelector(".headings")

// create first an elements

let btn = document.createElement("button")
console.log(btn)
btn.innerText = "Click Me"
btn.style.backgroundColor = "red"


// now append 
bothheading.prepend(btn) // at first  
bothheading.append(btn) // at last

//not both


// questions to do:-


let para = document.createElement("p")
para.innerText = "abcdefghijklmnopqrstuvwxyz"
para.classList.add("class","yellow")
para.style.color="white"

document.body.append(para)


readhead.remove()