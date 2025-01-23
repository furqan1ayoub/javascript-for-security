// array Methods
						// 1) direct Methods -> push,pop,shift,unshift,splice 
//push -> adds elements to end 
let array1 = ["hello","hi","yo"]
array1.push("ji haaaa")
console.log(array1)
// pop -> last element remove
array1.pop()
console.log(array1)

//shifts -> first element remove
array1.shift()
console.log(array1)
//unshift -> adds element given to start of the array
array1.unshift("AddedHi")
console.log(array1)

// splice -> used to remove in b/w elements & add/replace sth in place of them
array2 = [1,2,"this","that"]
array2.splice(0,2,"added-inplace-0idx","2") // idx-se , kitne-element(1-> if only idx elem remove) , what to write Can be many
console.log(array2)



//
// 							2) New Variable Assgining need  -> concat,tostring&slice
//  concat - combine two or more than two array in One combined one
array3 = ["hi-dkhfkhkshkf"]
combined_array = array1.concat(array2,array3)
console.log(combined_array)

// toString(arrayName) -> changes the array to string and need saving it to  a variable
// to store the string now We have to make a variable...

array2342 = ["furqan"]
a = array2342.toString()
console.log(a)


// slice(idx,uptoWhatidxNotInlcuded) => return a new array by getting slice from an array and return array of it 
// # -> so storing is must as if wana print or use

username1 = ["MrX","furqan","ahmad","seerat"]
// we gonna take the username from it failed to do sth 
failed_username = username1.slice(0,2) // here from 0 idx to 1 , 2 isn't included
console.log(failed_username)





// 				questions 

companies = ["Amazon","Youtube","Facebook","Twitter","Instagram"]
console.log(companies)
// remove first element
companies.shift()
console.log(companies)
// remove and replace -> amazon with tiktok
companies.splice(0,1,"Tik-Tok")
console.log(companies)
// add -> thread -> at last
companies.push("threads")
console.log(companies) 

// remove twitter and put X
// can be done by indexing but we gonna use splice

companies.splice(2,1,"X") 
console.log(companies) // done...!
