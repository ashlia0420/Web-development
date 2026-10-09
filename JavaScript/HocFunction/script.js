// function travelling(x) //<---------High order function
// {
//     console.log("I am going to pg..");
//     // console.log(x);  //this will print the entire function block
//     x();
// }
// function notification()
// {
//     console.log("Hi! I got Home");
    
// }
// travelling(notification);





// function makePayment(x)
// {
//     console.log("Payment is being processed...");
//     console.log("Payment successful");
//     // console.log(x);  
//     x();
//     // readyMessage(); //both gives same
// }
// function readyMessage(){
//     console.log("Your food order is placed");
// }
// makePayment(readyMessage);





// function bookTicket(x)
// {
//     console.log("Booking ticket....");
//     x("BKU",9);
// }
// function sendConfirmation(movieName,showTime)
// {
//     console.log("Ticket booked for: ",movieName," and the time is",showTime);
// }
// bookTicket(sendConfirmation);


function e3()
{
    return function anamika(){
        console.log("Hi");
    }
}
let c=e3();
// console.log(c);  <------this will only retrun the function anamika
console.log(c()); 




