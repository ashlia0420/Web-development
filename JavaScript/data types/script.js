let subject= "JAVA";
console.log(subject[0]);
subject[0]="M";
console.log(subject); //the actual value is not changed as string is immutable

subject="MAVA";
console.log(subject);



let students=["joel","Angel","Lia"]; //Array
console.log(students);
students[1]="Gauri";
console.log(students);//here the value "Angel" changed to Gauri as Array is mutable
console.log(typeof students);

let price=250;
console.log(price);
var noOfTickets=4;
console.log(noOfTickets);
const rating=3.5;
console.log(rating);
console.log(typeof rating); //type of datatype check


let movieName="Paradise";
console.log(movieName);
let theatre="Central Mall";
console.log(theatre);
console.log(typeof theatre);
let actor="Nani";
console.log(actor);


let isPaymentComplete=true;
console.log(isPaymentComplete);
let hasShowStarted=false;
console.log(hasShowStarted);
console.log(typeof hasShowStarted);


//real time : numbers
let age=2;
let salary=25000;
let busSpeed=45;


//real time : String
let driverNAme="Rahul";
let busNumber="KL 07 AB 1234";
let status="";

//realtime: boolean
let isLoggedin=true;
let isBusMoving=true;
let isDriverAvailable=false;

let userage=20;
let isAdult=userage>=18;
console.log(isAdult);

