// //How to add element from the starting and ending of an array
// let movieNames=["Premam","BKU","Jailer2"];
// console.log(movieNames);

// //end
// movieNames.push("KGF"); //add element at the end of array
// console.log(movieNames);

// movieNames.pop(); //remove elements from the end ofthe array
// console.log(movieNames);


// //start
// movieNames.unshift("I am game"); //add element from the starting of the array
// console.log(movieNames);

// movieNames.shift(); //remove element from the start of array
// console.log(movieNames);







//slice method
// let kochiStaff=["Sona","Niveditha","Sathya","Amaresh"];
// console.log(kochiStaff.slice(1,3));   //this extracts elements at 1,2


// splice-by using this we can 
//add
//remove
//update
//SYNTAX: arrayName.splice(startIndex,del count, item1, item2,,,,etc);



// remove
// let fruits=["Apple", "Guava","Orange", "Grape"];
// console.log(fruits);

// fruits.splice(1,2);
// console.log(fruits); 


//add
// let fruits = ["Apple", "Guava", "Orange", "Grape"];
// console.log(fruits);

// fruits.splice(1, 0,"Sathukudi","pineapple");  //inserts before guava
// console.log(fruits); 



//update
// let fruits = ["Apple", "Guava", "Orange", "Grape"];
// console.log(fruits);

// fruits.splice(2, 1,"Bananananana"); //replaces orange with banananana
// console.log(fruits); 

// fruits.splice(2, 1, "Orange","Sathukudi");   //this will replace banananana with orrange and also add Sathukudi after that
// console.log(fruits); 








// 1.length
//Simple definition: Returns the number of elements in a array

//Real time example 1: Student count
// let students=["Ravi","Kiran","Suresh"];
// console.log(students.length);




// 2.at()
//Simple definition: Returns the element at a given index.
                //   it also supprts negative indexes

//  // Real time example 1: last item
// let products=["Laptop","Mouse","Keyboard"];
// console.log(products.at(-1));  //keyboard


// Real time example 2: Second item
// let students=["Ravi","Kiran","Suresh"];
// console.log(students.at(1)); //Kiran



//3.push()
//Simple defintion: Adds one or more elemets to the end of an array

// // Real time eg 1 : Add Student
// let students= ["Ravi","Kiran"];
// students.push("Suresh");
// console.log(students);

// // // Real time eg 2 : Add cart item
// let cart = ["Mouse"];
// cart.push("Webcam");
// console.log(cart);

// // // Real time eg 1 : Add Notification
// let notification = [];
// notification.push("New Message");
// console.log(notification);



// //4. pop()
// // //Simple definition: Remove the last elemeent from an array.

// //Real-time eg1 : Remove last cart item
// let cart=["Phone","Case","Charger"];
// let removed=cart.pop();
// console.log(removed);
 
// //Real-time eg2 : Remove latest notification
// let notifications = ["Login", "Payment", "Logout"];
// console.log(notifications.pop());

// //Real-time eg3 : Undo last action
// let actions = ["Type","Save","Delete"];
// let lastAction = actions.pop();
// console.log(lastAction);





//5 unshift()

//Simple definion : adds one or more elements to the beginning of an array
// //Real time eg2 : New queue customer
// let queue=["Kiran","Suresh"];
// queue.unshift("Ravi");
// console.log(queue);


// //Real time eg2 : Featured product
// let products = ["Mouse", "Keyboard"];
// queue.unshift("Laptop");
// console.log(products);




//6.Shift ()
// simple definition:Removes the first element from an array
// //REal Time eg1: Serve first Customer
// let queue=["Ravi","Kiran","Suresh"];
// let customer=queue.shift();
// console.log(customer);

// //REal Time eg2: Remove oldest notification
// let notification = ["old","new"];
// console.log(notification.shift());



// 7.slice()
// Simple definition: Return a portion if an array without changing the original array. The end index is excluded 
// //Real Time eg1: Show first 3 products
// let products = ["Laptop", "Mouse", "Keyboard","Monitor"];
// console.log(products.slice(0,3));

// //Real Time eg2: Copy Selected students
// let students = ["Ravi", "Kiran", "Suresh", "Arjun"];
// console.log(students.slice(1, 3));

// //Real Time eg3: Recent orders
// let orders = ["01","02","03","04"];
// console.log(orders.slice(-2));



// 8. splice()
//  Simple definition: Adds,Removes, or replaces elements at a chosen postin. it changes the original array.
// // Real time eg1: Remove cancelled item
// let cart=["Laptop","Mouse","Keyboard"];
// cart.splice(1,1);
// console.log(cart);

// // Real time eg2: Insert a product
// let products = ["Laptop", "Keyboard"];
// products.splice(1, 0,"Printer");
// console.log(products);

// Real time eg3: Replace a product
// let products = ["Laptop", "Old Mouse", "Keyboard"];
// products.splice(1, 1, "New Mouse");
// console.log(products);



