// functions :-  are reusable piece of code in programming-> that does work(defined) only when called
// it saves -> time & reduces reduncacy of code by instead of doing a work many times we do once in it
// & call it when we have to do that instead of writing again(making our code look short and understandable not bulky..)
// basic eg with syntax

// function declaration:- 
function greetings(){
	console.log("Hello,Welcome Sir")
}
greetings() // just call it
console.log(3+2)
greetings() // just call it once more.. and i.e why it is reusable 


// Parameters & Arguments 
function adding(a,b){ // parameters (a,b)
	console.log(a+b)
}
adding(1,5)//calling with 'arguments' (1,5) i.e values to parameters (a,b) respectively.
console.log("Some in b/w")
adding(2,354) // call anytime as it is reusable jus Invoke/call it with args

// Return Keyword -> returns a value and we usually save it in variable to print or use for future..

function getName(name){
	return name
}
getName("furqan") //only it is returned the value , we didn't store / console.log(getName("furqan")) - it ........So no change in console
console.log("--------")

storedName = getName("Ahmad") // as passing new args as function is reusuable piece of code anywhere

console.log(storedName) // stored jisme Hai -> woh print kro

// also not compulsory if we don't want to save the value for future use

console.log(getName("furqan...")) // it will only -> print returned xNO STORing...


// 				Variable Scoping
// Global level scope of variable & Local Level 
// 1) local level
function adding(a){
	console.log("a = ",a)
	console.log(1+a)
}
adding(2) // a will be here 2 but not globally , locally
// try to print now here globally a
//console.log(a) -> // undefined / error as a is defined locally not globally

// 2) globally level
function subtract(a){
	return a-1
}
a = 2
console.log(subtract(a))
// call a now here
console.log(a) // a as a is declared bahar  So can we called Everywhere

// So it is impt in programming to keep care where You declare the variable




// arrow function -> shorter and compact way to make Function Expression
// when we don't have lots of work to do & NO args
// function expression:- 

let greet = () =>console.log("hello")
greet()
// Normal Syntax
let add = (a,b) =>{
	return a-b
}
savedValue = add(5,1)
console.log(savedValue,'-')

// this is where we make an expression kinda assigning a variable 
// a function k/a function Expression

// the normal one i.e using function keyword then name is k/a function declaration

// qs1: 
function calculateSum(array1){
	sum = 0
	length1 = array1.length
	for (let eachNo of array1){
		sum+=eachNo
	}
	return sum/length1
}
avg = calculateSum([1,2,3,4,5])
console.log(avg)
// qs2:- 
function filterEvenNumbers(array2){
	let array3 = []
	for (let i = 0; i<array2.length;i++ ){
		if (array2[i] % 2==0){
			array3.push(array2[i])
		}
	}
	return array3
}
let onlyEvenArray = filterEvenNumbers([1, 2, 3, 4, 5, 6,8])
console.log(onlyEvenArray)