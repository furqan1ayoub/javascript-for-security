// Objects -> a kinda variable which has key value pair 
// where data and functions (properties & method) are bundled together 
// it gathers all data and functions in one variabel making it best to organize data
// eg see objects are a car-> which has some property and does some work 
let car = {
	// data / property about car
	brand : "Toyota",
	Year : 2025,
	model : "BMW",
	// what car can do or functions / methods
	start : function(){
		console.log("Started....")
	}

}

// how to access them 
console.log(car.Year)
console.log(car.model)
// or
console.log(car["brand"]) // using sq brackets

// how to make car work /call function defined in car 

car.start()


// eg 2:

let personDetails = {
	// data related to person
	Name:"Furqan",
	salary: "50,000",
	greet : function(empSatis){ // this here is specific to this object's variables Not Gloablly
		console.log(`Your Name is ${this.Name} & Your Salary is ${this.salary} You Are ${empSatis}`) // empSatis isn't this cause it is arg to  put outside the object
	}
}
// instad of making each time each variabel we can put it in one and more modulear
// access
personDetails.greet("Not Happy")


window.console.log(window.console)

console.dir(window.document)

// Dom basics-> a strucutred representation of html element 
// it is a tree of nodes each node represents an element in html doc
// it is also a object having values and methods in it

// it is just kinda when browser loads the window object the html defined
// for the page goes into the doc
// then we can manipulate it basis dynamically 
// & yeah i.e the reason -> we write script tag at last in html
// cause we want to load -> all elements in Document object first
// then javascript code to manipulate it

// like if any heading isn't there loaded yet in document
// Javascript logic can't be applied to it 