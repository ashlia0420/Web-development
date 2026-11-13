

// let h1=document.getElementById("x");
// console.log(h1);


// let p=document.getElementsByClassName("q")
// console.log(p); //html collection  [p,p,p] //012
// console.log(p[0]);
// console.log(p[1]);
// console.log(p[2]);


// // what is html collection?
// // it is like an Array
// // it has length property
// // it supports index based access
// // it does not have forEach()



// let h2=document.getElementsByTagName("h2")
// console.log(h2);
// console.log(h2[0]);
// console.log(h2[1]);
// console.log(h2[2]);


// let span=document.querySelector("span");
// let span = document.querySelectorAll("span");
// let span = document.querySelectorAll("#x");
// let span = document.querySelectorAll(".y");
// // console.log(span);
// span.forEach((ele) => {
//     console.log(ele);
// })




// DOM MANIPULATION
// let k=document.getElementById("x");
// // console.log(k);
// // console.log(k.innerHTML); //CONTENT+TAGS
// // console.log(k.innerText); //CONTENT

// innerHTML
//it used to get and change the content of html element
// returnd cont+tags
//we can add content and we can add tags also

// innerText
//it used to get and change the content of html element
// returnd cont
//we can add content and we cant add tags also



// // k.innerHTML="Infosys";
// // k.innerHTML="infosys <i>hii</i>";
// k.innerText = "infosys <i>hii</i>";



// textContent and InnerText
let div=document.getElementById("x");
console.log(div.textContent); //vissible+hidden content
console.log(div.innerText); //only visible content

// diff
// innerText- it returns only visible content of an element
// textConnect- it returns all the content, including hidden content also

