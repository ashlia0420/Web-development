// let premiumBatch=["Noyal","Prince","Deva"];
// let a=premiumBatch[1];
// console.log(a);
// let b = premiumBatch[0];
// console.log(b);


// let premium={
//     placedStudent: "Noyal",
//     package:25000,
//     city:"kochi"
// }
// console.log(premium.placedStudent);
// console.log(premium.package);

//ABOVE ALL SHOULD BE ACCESSED ONE BY ONE



//Destructuring
// it is an efficient way to extract multiple values from an object or array

// //Array
// let premiumBatch = ["Noyal", "Prince", "Deva"]; //012
// // let[a,b,c]=premiumBatch;
// // console.log(b);

// let [second,first,third]=premiumBatch;
// console.log(first);


// nested array
// let premiumBatch = ["Noyal", "Prince",["Josna","Aneeta","Binitta"], "Deva"]; //0123
// let [a,b,[x,y,z],c]=premiumBatch;
// console.log(y);


//How to skip elements
// let trainers=["Anwith","Dhanish","Kalam","Sathya"]
// let [a,b,,d]=premiumBatch;

// let [a,b,c,d,e]=trainers;
// console.log(e);  //undefined




//OBJECT DESTRUCTURING
// let kochi={
//     noOfStudents:350,
//     manager:"urmila",
//     noOfTrainers:5
// }
// let{noOfStudents,manager,noOfTrainers}=kochi;
// console.log(manager);

//we CANNOT assign the property key with different varibles, we have to use the same key as in object



let kochi = {
    noOfStudents: 350,
    manager: "urmila",
    noOfTrainers: 5,
    address:{
        landmark:"Renai",
        pincode:682225
    }
}
// let {noOfStudents,manager,noOfTrainers,address}=kochi;
// console.log(address); //this will print the address objet

let {noOfStudents,manager,noOfTrainers,address:{landmark,pincode},address}=kochi;
// console.log(pincode); this will print the picode

// console.log(address); this will print the address objet






