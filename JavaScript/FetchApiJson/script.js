// //What is Api
// //it is a way for two software applications to communicate with each other to get data or request services

// //or

// //it act as a bridge b/w two application
// //it allows one application to request data from another application


// //API
// //What is fetch API
// //it is a build in method in javascript
// //it used to make HTTP request to the server
// //allows us to communicate with server to get,send,update and delete the data
// //NOTE:fetch() return promise object
// //fetch(url("api(link))");






// // let promise1 = fetch("https://fakestoreapi.com/users")
// // promise1.then((response)=>{

// //     // console.log(response); //giving response(json format)
// //     let promise2=response.json();  //same as parse()
// //     // console.log(promise2); //giving promise
// //     promise2.then((data)=>{
// //         console.log(data);  //[{},{},...]
// //         console.log(data[0].email);
// //         console.log(data[0].username);
// //         console.log(data[0].name.lastname);        

// //     })
// // })
// // .catch((reason)=>{
// //     console.log(reason);

// // })

// // stringify()
// // parse()


// let promise1 = fetch("https://fakestoreapi.com/products")
// promise1.then((response) => {

//     // console.log(response); //giving response(json format)
//     let promise2 = response.json();  //same as parse()
//     // console.log(promise2); //giving promise
//     promise2.then((data) => {
//         data.forEach((ele) => {
//             console.log("Category: ", ele.category);
//             console.log("Price: ", ele.price);
//             console.log("Rating: ", ele.rating.rate);
//         })

//     })
// })
//     .catch((reason) => {
//         console.log(reason);

//     })







// fetch() using async await

async function f1() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let x = await response.json()
        console.log(x);
        console.log(x[0]);
        console.log(x[0].price);
    } catch (error) {
        console.log(error);

    }
}
f1();

