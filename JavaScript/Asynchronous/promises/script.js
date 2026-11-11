// what is promisse ?
// 1. promise is a javascript Object;
//      it is used to handle asynchronous operations
//      it represents the eventual success or failure of asynchrounous operation

// it has 3 states
// pending- asynchronous operation is in process
// fulfilled- the asynchrounous operation completed successfully
// rejected - the asynchronous operation failed



// // // How to create a promise

// // let payment= new Promise((resolve,reject)=>
// // {
// //     console.log("Payment is loading...");
// //     setTimeout(()=>{

// //         let paymentStatus=false;
// //         if(paymentStatus)
// //         {
// //             resolve("Payment successful! order confirmed");
// //         }
// //         else{
// //             reject("Payment failed! Please try again");
// //         }
// //     },3000);

// // })
// // payment.then((value)=>{
// //     console.log(value);
// // })
// // payment.catch((error)=>{
// //     console.log(error);

// // })



// How to handle promises
// to handle promise we have to use
// .then(()=>{})
//  .catch(()=>{})
// if the promise is resolve state----goes to then() method
// if the promise is rejected state----goes to catch() method



// let foodOrder=new Promise((resolve,reject)=>{
//     console.log("Placeing your food order....");

//     setTimeout(()=>{
//         let ordeStatus=false;

//         if(ordeStatus)
//         {
//             resolve("Your food order has been accepted");
//         }
//         else{
//             reject("Your food order has been rejected")
//         }
//     },2000);
// });
// foodOrder.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);

// // })



// let bus = new Promise((resolve, reject) => {
//     console.log("Aneeta is waiting for bus...");

//     setTimeout(() => {
//         let busStatus = true;
//         if (busStatus) {
//             resolve(() => {
//                 travelName: "flix bus",
//                     BusNo: "KL078945",
//                         girl: "Aneeta"
//             })
//         }
//         else {
//             reject("Bus gone")
//         }
//     }, 4000)

// })

// bus.then((message) => {
//     // console.log(message);
//     console.log("Cm Daughter: ", message.girl);
//     console.log("Travels name: ", message.travelsName);
//     console.log("Bus");
// })

// let foodOrder=new Promise((resolve,reject)=>{
//     console.log("Placeing your food order....");

//     setTimeout(()=>{
//         let ordeStatus=true;

//         if(ordeStatus)
//         {
//             resolve("Your food order has been accepted");
//         }
//         else{
//             reject("Your food order has been rejected")
//         }
//     },2000);
// });
// foodOrder.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);

// })


// //How to hanglee promise
// Method 2
// async function handlePromise() 
// {
//     try{
//         let result=await foodOrder
//         console.log(result);  
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
//     finally{
//         console.log("Thank you for using swiggy");;
        
//     }
    
// }
// handlePromise();



// console.log("start");
// let id=setTimeout(()=>{
//     console.log("Good afternoon");
    
// },3000);
// clearTimeout(id);
// console.log("end");

// 


console.log("Timer started");
let count=0;
let id=setInterval(()=>{
    count++;
    console.log("Count down: ",count);
    if(count==5){
        clearInterval(id);
    }
},1000);
console.log("end");


