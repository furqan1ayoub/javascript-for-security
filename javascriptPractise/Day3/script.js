// terinary operator

//condition? dothis: elsedothis
let a = 2;
(a > 1) ? console.log("Yes") : console.log("No....");

// loops questions Revise-
// 3types of for loops in javascript=> 

// 1) for normal using no's-> 
// for(intializer,stopping conditon,updatation){
// 				do our work              
// }

// 1) print all even no-s from 0 to 100

// ans
for(let i = 0; i<=100; i++){
	console.log(i)
}




//2)for of- for string/arrays
// eg:- 
let string1 = "hello-Sir"
for (let i of string1){
	console.log(i)
}
// find size of string1 :-
let size = 0
for(let char of string1){
	size++
}
console.log(size,'of the string....')

//3) for in- for objects(key:value) & arrays

// will discuss in objects about this one....



// 					While Loops

//syntax - 
// initializer (let i = 1)
//while(condition){
// do the work
		//i++ (upadations otherwise Infinite loop.....)
//}

// eg:- print "furqan 10 times"

let initializer = 1

while(initializer<=10){
	console.log("Furqan",initializer)
	initializer++
}


// question:-Guess Game -> ask random no. (prompt) 
// and ask them until they give correct....!


let inp1=parseInt(prompt("Enter The No."))
let guessNo = 34
while(inp1 != guessNo){
	inp1=prompt("Wrong Enter Correct... ")// added this cause it will print this everytime and not infinte as it needs sth to put then if we put right and then 34 the next will be execute
	// otherwise wrong no.-> again this prompt
	//until user guesses right it will then not execute.....
}
if(inp1==guessNo){
	console.log("You won..")
}