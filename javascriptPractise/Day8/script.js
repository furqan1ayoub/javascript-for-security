// Array Method(using functions)

// 1) forEach method is used -> when we want to perform sth to elements of array but don't want new array
//eg
let array1 =[1,2,3,4,5,6]
array1.forEach((number) =>{ // number is the iterator which iterates and have each elements value in each iteration
	if (number % 2 ==0){
		console.log(number)
	}
})


// 2) map -> when we want to perform sth(work) to each Element of array
//  as well put the result in the array We use this
let array2 = [3,5,2,5,99]
let newArray2 = array2.map((number)=>{
	return number * 3
})
console.log(newArray2) // just print now

// 3) filter -> it just filters the no's from array and 
// what we need only gives it in new Array based on condition
// it does kinda if else thing
// It also return values in form of array
// eg)
let array3 = [32,53,52,33,123]
let EvenArray = array3.filter((number)=>{
	return number % 2 ==0 // it kinda is -> if else thing 
})
console.log(EvenArray) // only even stored...








// questions to practise ->
//1) we are given array of marks of student 
let marks = [84,93,64,99,85]
// filter out the marks that scored above 90 and Put them in 'Array'
let bestMarks = marks.filter((eachMarks)=>{
	return eachMarks > 90 
})
console.log(bestMarks)


// finding even odd in it
marks.forEach((numb)=>{
	if(numb % 2 ==0){
		console.log(`EVEN NO - ${numb}`)
	}
	else{
		console.log(`Odd NO - ${numb}`)
	}
})
