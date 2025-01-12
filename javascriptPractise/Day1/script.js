// create a const obj called - "product to store info show in the picture"


// objects are immutable kinda data type and consisits of different combination of data types in a key as value
// key:value,
// i.e key can be only just string or any thing specific but value can haved different data type value

const product = {
	price:100,
	is_Strong :false,
	title:"Ball Pen",
	rating : 4,
	offer : 5,
	moreDetails : ["very-smooth","classy-look","buy once Check Yourself"]
}
//printing it...
console.log(product)

// getting any value here;
console.log(product["price"])

// Mutable//changing the value here:-

product["title"] = "Gell Pen"
product["is_Strong"] = true
console.log("After Updating.........")
console.log(product)

// see the value =-changed means it is mutable type of data type ---