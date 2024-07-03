// 01
function fullname( firstName , lastName){

return firstName+""+lastName

}
console.log(fullname( "sarmini","saththiyanathan"));
//02
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
//03
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//04
let text="There is a commonly stated “rule” of grammar that beginning a sentence with and, or any other conjunction, is a mistake. But this is just not true. This supposed “rule” has no basis in actual writing, and even formal writing features plenty of sentences that start with and and other conjunctions. And we think that is really cool."
let andCount=(text.match(/\band\b/gi)||[])
console.log("Number of 'and':",andCount );

//05
const now = new Date();
const [year, month, date,day] = [
  now.getFullYear(),
  now.getMonth() + 1, 
  now.getDate(),
  now.getDay(),
];
console.log(`Year: ${year}, Month: ${month}, date: ${date},day :${day}`);

//06

const slope = 2;
const yIntercept = -2;
const xIntercept = -yIntercept / slope;

console.log(`Slope (m): ${slope}`);
console.log(`Y-intercept (b): ${yIntercept}`);
console.log(`X-intercept: ${xIntercept}`);

//07


const x1 = 2, y1 = 2;
const x2 = 6, y2 = 10;
const slope1 = (y2 - y1) / (x2 - x1);


console.log(`The slope between the points (${x1}, ${y1}) and (${x2}, ${y2}) is: ${slope1}`);

//80
function calculateEarnings() {
  
  let hours = prompt("40:");
  let rate = prompt("28:");

  
  hours = parseFloat(hours);
  rate = parseFloat(rate);

  
  let earnings = hours * rate;

  
  console.log((`1120: ${earnings}`));
}


calculateEarnings();




//09
let birthYear  = prompt("2001.05.19:");


let Year = new Date().getFullYear();

let age = year - birthYear;


if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    let waitYears = 23 - age;
    console.log(`${age}. ${waitYears} years.`);
}

//11

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(number) {
    return number * number;
});

console.log(squares);
//12
const books = [ 
  {
   title: "To Kill a Mockingbird",
   author: "Harper Lee", 
   genre: "Fiction",
   pages: 336, 
   publication_year: 1925, 
  }, 
  { 
  title: "1984", 
  author: "George Orwell",
  genre: "Dystopian",
  pages: 328, 
  publication_year: 1949,
   }, 
  {
   title: "Pride and Prejudice", 
   author: "Jane Austen",
   genre: "Romance",
   pages: 432, 
   publication_year: 1813,
   }, 
  {
   title: "The Great Gatsby",
   author: "F. Scott Fitzgerald", 
   genre: "Classic", 
  
   pages: 180,
 publication_year: 1925,
 },
 ];

 //1. MAP:

 //Get an array of all titles
 const allTitles = books.map(book => book.title);
console.log(allTitles);
 //Get an array of all author
 const allAuthors = books.map(book => book.author);
console.log(allAuthors);
 //Get an array of objects with just title and author properties
 const titlesAndAuthors = books.map(book => ({ title: book.title, author: book.author }));
console.log(titlesAndAuthors);

//2. REDUCE:

//Get the total number of pages for all books
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
console.log("Total number of pages for all books:", totalPages);
//Get the total number of books by publication_year  (using a map of publication_year to count):
const booksByPublicationYear = books.reduce((acc, book) => {
  const year = book.publication_year;
  acc[year] = acc[year] ? acc[year] + 1 : 1;
  return acc;
}, {});
console.log("Total number of books by publication year:", booksByPublicationYear);
//Get the total number of books  in all the book titles:
const totalBooks = books.length;
console.log("Total number of books:", totalBooks);
//Get the total number of books by genre (using a map of genre to count):
const booksByGenre = books.reduce((acc, book) => {
  const genre = book.genre;
  acc[genre] = acc[genre] ? acc[genre] + 1 : 1;
  return acc;
}, {});
console.log("Total number of books by genre:", booksByGenre);

 
 
//13
function greet(name){
  return`Welcome ${name} to the team.`;
}
console.log(greet("mala"));
console.log(greet("jail"));

//14
function litres(hours){
  const  waterperhour=0.5;
  const totlewater=hours*waterperhour;
  return(totlewater);
}
console.log(litres(3));
// console.log(litres());
// console.log(litres());

//15
function PositiveNumbers(arr) {
  return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}
console.log(PositiveNumbers([1,2,3,4]));
console.log(PositiveNumbers([-1.-2,-3,-4]))

//16
function BMI(weight, height) {
  // Calculate BMI
  const bmi = weight / (height * height);

  // Determine weight category
  let category;
  if (bmi < 18.5) {
      category = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
  } else {
      category = 'Obese';
  }

  // Return BMI and category
  return { bmi: bmi.toFixed(1), category: category };
}


const result = BMI(70, 1.75); 
console.log(`BMI: ${result.bmi}, Category: ${result.category}`);

//Part 2 

 //Condition

  //01
 function Sign(number) {
  return number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero';
}


console.log(Sign(12));  
console.log(Sign(-10));  
console.log(Sign(0));

//02
function num(number){
  return number % 2 === 0 ?`evan`:`odd`;
}
console.log(num(12));
console.log(num(5));
console.log(num(0));

//03
function Number(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
console.log(Number(10,5));

//04
function TicketPrice(age){
let ticketprice= age < 12 ? 5 :
                age < 18 ? 10 :
                age < 60 ? 20 : 15;
      return ticketprice;          
                
}
console.log(TicketPrice(15));
console.log(TicketPrice(25));

//05
function LeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


console.log(LeapYear(2000)); 
console.log(LeapYear(1978));

//06
function Discount(purchaseAmount) {
  let discount = 0;

  if (purchaseAmount >= 100) {
      discount = 20;
  } else if (purchaseAmount >= 50) {
      discount = 10;
  } else {
      discount = 0;
  }

  return discount;
}

const amount1 = 120;
const amount2 = 70;
const amount3 = 30;

const discount1 = Discount(amount1);
const discount2 = Discount(amount2);
const discount3 = Discount(amount3);

console.log(`Purchase amount: $${amount1}, Discount: $${discount1}, Final Price: $${amount1 - discount1}`);
console.log(`Purchase amount: $${amount2}, Discount: $${discount2}, Final Price: $${amount2 - discount2}`);
console.log(`Purchase amount: $${amount3}, Discount: $${discount3}, Final Price: $${amount3 - discount3}`);

//07
function greetUser() {
const now = new Date();
  const hour = now.getHours();

  let greeting = "";
  if (hour >= 5 && hour < 12) {
      greeting = "Good morning";
  } else if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon";
  } else {
      greeting = "Good evening";
  }

  
  console.log(`${greeting}, user!`);
}

greetUser();

//08





//Part 3 

//Loops 

//01
console.log("Numbers from 0 to 5:");
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

0
//02
let sum = 0;
for (let i = 0; i <= 99; i++) {
    sum += i;
}
console.log("Sum of numbers from 0 to 99:", sum);

//03
let evenSum = 0;
for (let i = 10; i <= 100; i += 2) {
    evenSum += i;
}
console.log("Sum of even numbers from 10 to 100:", evenSum);

//04
console.log("Elements in reverse order:");
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

//05
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];

let sumArray = [];
for (let i = 0; i < arr_3.length; i++) {
    let sum = arr_3[i] + arr_4[i];
    sumArray.push(sum);
}

console.log(sumArray);  

//06
let str1 = "javascript";
let modifiedStr = "";

for (let i = 0; i < str1.length; i++) {
    if ((i + 1) % 2 === 0) { 
        modifiedStr += 'Z';
    } else {
        modifiedStr += str1[i];
    }
}

console.log(modifiedStr);  

//07
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum1 = arr_1.reduce((acc, curr) => acc + curr, 0);
let sum2 = arr_2.reduce((acc, curr) => acc + curr, 0);
let totalSum = sum1 + sum2;

console.log(`${sum1} + ${sum2} = ${totalSum}`);
