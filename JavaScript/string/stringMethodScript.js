// let city="hyderabad"
// let res=city.toUpperCase()
// console.log(res);
// console.log(city);

// let branchHead="VIJAY SIR"
// branchHead=branchHead.toLowerCase();
// console.log(branchHead);

// let movie="Jailer"//012345
// let res=movie.movie.charAt(5); //r
// let res=movie.charAt(); //J
// let res = movie.charAt(9);//out of index---->    empty 
// let res=movie.charAt(-3); // negative index does not work -----> -1




// let movie="Jailer";//012345
// let res=movie.indexOf("i"); //2
// let res = movie.indexOf("I"); //-1
// let res = movie.indexOf(); //-1
// console.log(res);




// let message= "ICE CREAM IS GOOD. ICE CREAM IS TASTY";
// let res=message.replace("ICE CREAM","biriyani");   //replaces only the first occurence
// let res = message.replaceAll("ICE CREAM", "biriyani");   //replaces ALL occurence

// console.log(res);


// let user="Sleeper Athul";  //123456789101112
// // console.log(user.length);
// // let res=user.charCodeAt(10);
// let res=user.charCodeAt(15) ///returns empty string
// console.log(res);



// let contactNumber="6789";
// // let res=contactNumber.padStart(10,"X");  //Has a total of 10 characters and except for the last 4 character rest is "x" //XXXXXX6789
// let res=contactNumber.padEnd(10,"X");  //6789XXXXXX
// console.log(res);

// console.log(`we have sent OTP to your mobile number ending with ${contactNumber.padStart(10, "X") }`);


//slice

// let user="KALAM";   //01234
// let res=user.slice(0,3); //KA
// let res=user.slice(0,4); //KAL
// let res=user.slice(2); //LAM

//START INDEX > INDEX   ---------> empty string

// let res=user.slice(3,1); //empty string
// let res=user.slice(-4,-2); //AL
// let res=user.slice(-2,-4);//empty string
// console.log(res);





//substring
let user="KALAM";   //01234
// let res=user.substring(0,4); //KALA
// let res = user.substring(4, 0);  //ALA 
let res = user.substring(-3);  //KALAM 

//IF STARTINDEX> LAST INDEX---------------> SWAP OF INDEX ie (4,2) --> (2,4)
// IF INDEX=-3 --------> FULL STRING
console.log(res); 






