// var a=10;
// let b=20;
// const c=30;

// console.log("Outside the function and block",a);
// console.log("Outside the function and block",b);
// console.log("Outside the function and block",c);

// function f1()
// {
//     console.log("Inside the function",a);
//     console.log("Inside the function",b);
//     console.log("Inside the function",c);
// }
// f1();

// console.log("outside the function",a);
// console.log("outside the function",b);
// console.log("outside the function",c);

// if(true)
// {
//     console.log("inside the block",a);
//     console.log("inside the block",b);
//     console.log("inside the block",c);
// }

// console.log("Outside the block",a);
// console.log("Outside the block",b);
// console.log("Outside the block",c);


// Function Scope
function f1() {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("Inside the function", a);
    console.log("Inside the function", b);
    console.log("Inside the function", c);
}
f1();

console.log("outside the function", a);
console.log("outside the function", b);
console.log("outside the function", c);

if (true) {
    console.log("inside the block", a);
    console.log("inside the block", b);
    console.log("inside the block", c);
}

console.log("Outside the block", a);
console.log("Outside the block", b);
console.log("Outside the block", c);


if (true) {
    var a = 10;
    let b = 10;
    const c = 30;
    console.log("inside the block", a);
    console.log("inside the block", b);
    console.log("inside the block", c);
}

console.log("Outside the block", a);
console.log("Outside the block", b);
console.log("Outside the block", c);


