// Document Object Model-> structured representation & hiereacical rep of Html document So -> that javascript can interact with it and 
// change & make website dynamic 
// This is loaded everytime into the window object by the browser (so it is common & same in all browser => the structre)


// Dom Manipulation refers to Accessing those html elements through the Dom & Changing Sytle, content or structure Usingn Javascript

// BOM -> browser Object Model -> all other things about browser except dom(html and its propetire) -> comes in BOM

//Ways to Manipulate Dom

// We Use Some methods of Dom to interact with it

//1) getElementByid
//2) getElementByclass
//3)getElementByTagname
//4) Mostly:- querySelector , querySlelctor all 


//-> The all are function in 'Dom'===> check it -> and see document.querySelector("")


// --------------------------------------------------------------------------------------------------------------------------------- //
// we access the elements by id,class,name => put them in variable & then to that vairable -> use Methods 
// eg:-
let heading = document.querySelector("#head") // #-> id , . => classnanme
console.log(heading.textContent)
// now change by new Method
heading.textContent = "Document object Model"
console.log("This returns Tag Name -> ",heading.tagName)

let newBtn = document.createElement("button")
newBtn.innerText = "Click Me !"
document.body.appendChild(newBtn)

// This is all Dom Maninpulation -> changing Real Time Html elements through dom



// Concatinitaon of Dom Elements => using    " + "
// remember always => access elements first  => based on id / class / even tag
let h3 = document.querySelector("h3")
h3.innerText = h3.innerText + " "+"added by concatiioan"



// access by quereySelector
let paras = document.querySelectorAll("p") // this is used below as reference
paras.forEach((eachPara)=>{
	eachPara.innerText = "nn"
})


// So properties => innerText,textConte,tagName, innerHtml
// and we apply methods on those propterties of the doucments nodes




// indexing of dom elements -> grouped together/ same list mai

paras[0].innerText = "idx0" // above one reference
paras[1].innerText = "idx1" // used best for each from list of nodes

// instead of typing for each use for loop
let idx=0
for (let eachPara of paras ){
	eachPara.innerText = `idx ${idx}`
	idx+=1
}


// each=======> elements => is k/a NOde in  Dom


const body = document.querySelector("body")

console.log(body.childNodes) 
// /n=> means text or the next line symbol if we put tags together=> no text

console.log(body.firstChild) // text cause -> space next line after <body> tag
console.log(body.lastElementChild)

console.log(body.firstElementChild)
console.log(body.lastElementChild)


// type of nodes  => text(/n) , comment(cmnt node) , (elemnt node/tag) 

// NOde type / Codes
// 1-> element 
//3-> text node /n
//8-> comment <~--h1--~>

// eg:- 

console.log(body.nodeType) // 1) cause element
console.log(body.firstChild.nodeType) // 3) cause /n i.e next line so 
console.log(document.lastChild) // 1) not cmnt-> wont' show as button appended
//new eg
console.log(document.head.lastChild.nodeType) // 8-> here no space/newline-so shows cmnt\



// Practise in projects to remember