// Object
//it is used to represent real world entities
//ex: employee data,student data,product data,etc
//it has collection of properties, each property contains
//key and value



let student={
    studentName:"Nidhi",
    course:"Python",
    rollno:101,
    "has-married": false,
    hasChildren:undefined,
    skills:["Python","SQL","html",[10,20,30],"css"],
    "@age":22,
    address:{
        city:"Kottayam",
        pincode: 123456,
        landmark:["Qspiders", "Khana peena","Renai"],
        contact:123
    },
    "job":{
        company:"infosys",
        role:"ASE"

    }
}

// console.log("Student details: ",student);


// how to access object properties
//we have 2 ways
// 1.Using dot notation(.)
// 2.Using brackeet notation([])

// console.log(student.hasChildren);
// console.log(student["course"]);
// console.log(student["has-married"]);
// console.log(student["@age"]);

// console.log(student.skills[2]);
// console.log(student.skills[3][2]);

// console.log(student.address.contact);
// console.log(student.address.landmark[1]);
// console.log(student["job"].role);








//HOW TO ADD, UPDATE, DELETE
product={
    item:"Mobile",
    price:20000
}
console.log(product);


product.color = "Black"; //add property
console.log(product);

product.price=30000;  ///update property
console.log(product);

delete product.color; // deletes property
console.log(product);

//we cannot delete object oncce its created
product=null;
console.log(product);


