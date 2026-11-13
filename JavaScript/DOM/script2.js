// // Changing styles
// function f1()
// {
//     let h1=document.getElementById("x");
//     console.dir(h1);
//     h1.style.color="Yellow";
//     h1.style.backgroundColor="blue";
//     h1.style.fontStyle="italic";
//     h1.textContent="Malabar Majilis";

// }


// let x=document.getElementById("x");
// console.log(x.getAttribute("src"));

// x.setAttribute("src","womendress1.jpg")
// console.log(x.getAttribute("src"));
// console.log(x);

// x.setAttribute("alt","I like Nazriya")

// x.removeAttribute("alt")
// console.log(x);



// Toggle,class, add,remove
//toggle-   if the lass is present it will remove
//           if the class is not present it will add

// let h1=document.getElementById("x");
// h1.classList.add("e3")
// h1.classList.remove("e3");


// function f1()
// {
//     // let h1=document.getElementById("x");
//     // h1.classList.toggle("e3");
// }



// function f1()
// {
//     let  body=document.getElementsByTagName("body");
//     body[0].classList.toggle("mode");
// }


// // createElement() and removeElement()
// let h1=document.createElement("h1")
// // console.log(h1);
// h1.textContent="Monday i will start react";
// document.body.append(h1,"Its too hot");
// // document.body.appendChild(h1, "Its too hot");


// let section=document.createElement("section");
// let h1=document.createElement("h1")
// let p=document.createElement("p")
// h1.innerHTML="Testyantra";  //we can choose any innerText,textContent, innerHTML
// p.innerHTML="Qspiders";
// section.append(h1,p);
// console.log(section);

// document.body.append(section);




// Remove element
// let p=document.getElementById("x");
// document.body.remove("p")


// let p=document.getElementById("x");
// console.log(p.classList.contains("x"));  //false

// let p = document.getElementsByClassName("y");
// console.log(p[0].classList.contains("y"));  //true

// let p = document.getElementById("x");
// console.log(p.classList.contains("y"));  //true




// 1.using inline
// function f1()
// {
//     alert("Thank you for following me.....");
// }


// // 2. using dom event properties
// let btn=document.getElementById("x");
// btn.onclick=function(){
//     alert("Payment successful....");
// }

// 3.using addEventListener()
// let btn=document.getElementById("x");
// btn.addEventListener("click",()=>{
//     alert("user dead.........")
// })




// DIFFERENCE ALL 3 METHODS
// // 1. inline event handling
// note: we cannot use same event multiple times
// function f1()
// {
//     console.log("Form is submitted.....");
// }
// function f2() {
//     console.log("it is in progress.....");
// }
// // executes the first onclick function



// // 2.using dom event properties
// // Note: if yu try to use it, the second function will get executed
// let btn=document.getElementById("x")
// btn.onclick=function(){
//     console.log("i will not subscribe..");
// } //anonymouse

// btn.onclick=function(){
//     console.log(" I already subscribed ur channel");
// }


// // // 3. Using addEventListener
// // // Note: we can use same event multipple times
// // let btn=document.getElementById("x");
// // btn.addEventListener("click",()=>{
// //     console.log("First");
// // })
// // btn.addEventListener("click", () => {
// //     console.log("sECOND");
// // })
// // btn.addEventListener("click", () => {
// //     console.log("THIRd");
// // })


// // mouseover and mouseout events
// let div=document.getElementById("box")
// div.addEventListener("mouseover",()=>{
//     document.body.style.backgroundColor="yellow"
// })

// div.addEventListener("mouseout", () => {
//     document.body.style.backgroundColor = "green"
// })


// // INPUT EVENT 
// let x=document.getElementById("x")
// x.addEventListener("input",(event)=>{
//     event.defaultPrevented();
//     console.log(x.value);
// })


// Change 
// x.addEventListener("change",()=>{
//     console.log(x.value);

// })



//// submit event 
// let form=document.getElementById("myform") 
// let input=document.getElementById("x")
// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     console.log(input.value);
//     console.log("Thank you for submitting..");  
// })




// let btn=document.getElementById("btn")
// btn.addEventListener("click",(event)=>{
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.target.tagName);
// })





// let x=document.getElementById("x");
// let p=document.getElementById("content")
// x.addEventListener("input",()=>{
//     p.innerHTML="User is typing: "+x.value;
// })






// EVENT PROPAGATION

let parent = document.getElementById("parent");
let child = document.getElementById("child");
let grandChild = document.getElementById("grandchild");

// parent.addEventListener("click", () => {
//     console.log("Parent clicked");
// }, false)


// child.addEventListener("click", () => {
//     console.log("Child clicked");
// }, false)

// grandChild.addEventListener("click", () => {
//     console.log("Grand child clicked");
// }, false)

// // note: by default 3rd argument is false which means event it registered for bubling phase



// parent.addEventListener("click", () => {
//     console.log("Parent clicked");
// }, true)


// child.addEventListener("click", () => {
//     console.log("Child clicked");
// }, true)

// grandChild.addEventListener("click", () => {
//     console.log("Grand child clicked");
// })
// // Note: here capturing pase, top to the targeted elemet
// // if yout want to see capturing phase we have to use 3rd argument as true



// StopPropagation : it stops the event from traveling back to top
 parent.addEventListener("click", () => {
    console.log("Parent clicked");
}, false)


child.addEventListener("click", () => {
    event.stopPropagation()
    console.log("Child clicked");
}, false)

grandChild.addEventListener("click", () => {
    event.stopPropagation()
    console.log("Grand child clicked");
})