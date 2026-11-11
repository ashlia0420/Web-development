//SYNCHRONOUS CODE

// console.log("Start");
// for(let i=1;i<=50;i++)
// {
//     console.log(i);
// }
// console.log("End");



// It allows the tasks to take significant amount of time to run in the background without blocking other code
//we have timer functions
//setTimeout()
//   -it executes the function only once after a specified delay time
//setInterval()
//   - it executes the function repeatedly after the specified delaay time



// //ASYNCHRONOUS code
// console.log("Start"); //synchronous code
// setTimeout(()=>{
//     console.log("This is a asynchrounous");
//     console.log("it will execute after 4 seconds");
// },3000); //1000ms=1sec

// console.log("End");


// console.log("Welcome to abhi bus.....");
// setTimeout(()=>{
//     console.log("Thank you for using abhi bus");
//     console.log("Use AbhiReturn coupon to get 50%");
// },3000);
// console.log("Your booking is in process");



// console.log("Loading....");
// setTimeout(()=>{
//  console.log("Data loaded successfully");
// },2000);








// console.log("Start");
// setInterval(() => {
//     console.log("it will keep on execute after delay time");
//     console.log("SetInterval Example");
// }, 3000);
// console.log("End");




// //Counter
// console.log("Timer Started");
// let count = 0;
// setInterval(() => {
//     count++;
//     console.log("Count down: " + count);
// }, 1000)



console.log("Digital Clock");
setInterval(()=>{
    // let res=new Date();
    // let res=new Date().toLocaleString();
    let res=new Date().toLocaleTimeString();
    console.log(res);
    
},1000)

