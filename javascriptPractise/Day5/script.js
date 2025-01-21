




// Find the average of marks in an array

let marksArray = [85, 97, 37, 75, 60]; // This can be Changed so used "let"
let totalMarks = 0;
let studentCount = 0;

for (let marks of marksArray) {
  totalMarks += marks;
  studentCount++;
}

const averageMarks = totalMarks / studentCount; // this is here constant So We use "Const"
console.log(`The Average of All Marks = ${averageMarks}`);

// Apply 10% discount to an array of prices

let originalPrices = [100, 200, 500, 350, 205, 70];
let discountedPrices = [];

for (let i = 0; i < originalPrices.length; i++) {
  const discountedPrice = originalPrices[i] - (originalPrices[i] * 0.1); 
  discountedPrices.push(discountedPrice);
}

console.log(originalPrices, "The Old Price-No Discount");
console.log(discountedPrices, "The new Price-Discount");