// //without apply (), call(),bind()

// console.log(this);  //here 'this' belongs to window


// let student1={
//     name:"Athul",
//     institute:"Qspiders",
//     contact:420,
//     display:function checking(){
//         console.log(this); //here 'this' refers to student1 object

//         console.log(this.institute); //student1.institute
//     }
// }
// student1.display();

//this keyword refered to the object that is currently executing the piece of code

// let student2 = {
//     name: "Aneeta",
//     institute: "Jspiders",
//     contact: 421,
//     display: function checking() {
//         console.log(this.institute); //student2.institute
//     }
// }
// student2.display();


// let student3 = {
//     name: "Josna",
//     institute: "Pyspiders",
//     contact: 105,
//     display: function checking() {
//         console.log(this.institute); //student3.institute
//     }
// }
// student3.display();


//here the problem is that we are creating the same function in each object, so if we are creating 100 object then we would have to create 100 functions also, so that is a problem



//using call(),apply(),bind()

let student1 = {
    name: "Athul",
    institute: "Qspiders",
    contact: 420
}



let student2 = {
    name: "Aneeta",
    institute: "Jspiders",
    contact: 421
}


let student3 = {
    name: "Josna",
    institute: "Pyspiders",
    contact: 105
}


function showDetails()
{
    console.log(this);
    console.log(this.name);
}

showDetails.call(student1);
showDetails.call(student2);


// function showDetails(city,course){
//     console.log(this);
//     console.log(this.name);
//     console.log(city);
//     console.log(course);

// }

// 'this' - access the properties of objects inside the function


// //call()
// showDetails.call(student1,"Kochi","Java");
// showDetails.call(student3, "Chennai", "Python");

// // apply()
// showDetails.apply(student1,["Kochi","Java"]);  
// showDetails.apply(student2, ["mumbai", ".net"]);  

//both apply() and call() will call the function the only change is the syntax when theres a formal argument in the function
// both apply and call method will execute immediately

//bind() will not execute immediately, the value returned by the bind() should be stored in another variable and then it should be called
//bind()- it returns new function with specified object

// showDetails.bind(student2);  <----this will show nothin

// let newFunction=showDetails.bind(student2);
// newFunction();

// let newFunction = showDetails.bind(student2,"Kochi",);
// newFunction();


// rest parameter

//without rest parameter
// function qspiders(victim1,victim2)
// {
//     console.log("victim: "+victim1);
//     console.log("victim: " + victim2);
// }
// qspiders("Hans","Josna","Anamika","Edwin");


// //with rest parameter
// function qspiders(victim1, victim2,...x) {
//     console.log("victim: " + victim1);
//     console.log("victim: " + victim2);
//     console.log(x);

// }
// qspiders("Hans", "Josna", "Anamika", "Edwin");






//spread operator -- to copy a array or object
let victims = ["Shahid", "Anamika", "Aswin"];
console.log("Victim: ", victims);

let copiedArray = ["Athul", ...victims, "Noyal"]
console.log("Copied Array: ", copiedArray);


let noyal = {
    course: "Java",
    batch: "Premium",
    isSleeping: true,
}
let prince = { ...noyal };

console.log("Noyal: ", noyal);
console.log("prince: ", prince);





