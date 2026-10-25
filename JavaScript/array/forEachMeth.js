let students=["Adhil","Shahid","Prince"];
students.forEach((ele,ind)=>{
    console.log("Elements: ",ele);
    console.log("Index: ",ind);
})

let prices=[100,400,800,600];
let newArray=[];
prices.forEach((ele)=>{
    newArray.push(ele+10);
})
console.log("Actual Array: ",prices);
console.log("New Array: ",newArray);


let trainers=["Sathya","Dhanish","Amaresh"];
let res=trainers.forEach((ele)=>{
    console.log("Trainers: ",ele);
    return "Venkat";
    
})
console.log(res);     ///this will return undefined. 
                    // for each body will not have return

                    
