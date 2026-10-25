// let student1="Prince";
// let student2="Noyal";
// let student3="Hans";


//Literal Way
// let arrayname=[];
// let students=["Prince","Noyal","Hans"];
// let details=[12345,"Munavir",null,undefined,[10,20,30]]; //Heterogenous
// console.log(details);


//Accessing elements using index position
let students=["Prince","Noyal",[300,500,800],"Hans"]; //0123
console.log(students);
console.log(students.length);
console.log(students[2]);
console.log(students[5]);

//Accessing nested arrays
//1
let a=students[2]
console.log(a);  //[300,500,800] //012
console.log(a[2]);
    //or
//2
console.log(students[2][2]); //800

let b=[100,200,[300,400,[500,600],700],800];
console.log(b[2][2][0]);





//how to  change elements
let trainers=["Sathya","Venkat","Amaresh"] //012
console.log("Before Change: ",trainers);

trainers[1]="Dhanish";  //Mutable in nature
console.log("After Change:",trainers);







