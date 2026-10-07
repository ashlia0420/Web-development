// function greeting(user)
// {
//     console.log("Good afternoon "+user);
// }
// greeting("Helen");


// function coffeeMachine(customer,typeOfCoffee,price)
// {
//     console.log("Type of coffee",typeOfCoffee);
//     console.log("Price: "+price);
//     // console.log(Edwin-Chef);
//     console.log("Take Vessels");
//     console.log("Add some milk and water");
//     console.log("Bring it to boil");
//     console.log("Add coffee powder");
//     console.log("Add sugar");
//     console.log("Pour coffee into a cup");
//     console.log("Prepared coffee for "+customer);
// }

// coffeeMachine("keller","Hot coffee")



// function hotel(name)
// {
//     for(let i=0;i<=50;i++)
//     {
//         console.log("Number : "+i);
//         console.log("come to : "+name+"hotel");
//         console.log("Experience goodness");
//     }
// }
// hotel("Yahoo");





//1. Employee Salary calculations
function calculateSalary(basicSalary,bonus)
{
    let totalSalary=basicSalary+bonus;
    console.log("Total salary: ",totalSalary);
    
}
calculateSalary(45000,10000);


// 2.Electricity Bill calculation
function calculateElectricityBill(units,rate)
{
    let bill=units*rate;
    console.log("Electricity Bill: ",bill);
}
calculateElectricityBill(150,7);


// 3. Bank Balance
function checkBankBalance(balance,deposit)
{
    let newBalance=balance+deposit;
    console.log("New Balance=",newBalance);

}
checkBankBalance(1000,500);


// 4. Shopping Billl
function calculateShoppingBill(price,quantity)
{
    let total=price*quantity;
    console.log("Shopping Bill: ",total);
    
}
calculateShoppingBill(50,3);

// 5. Student Marks

function calculateTotalMarks(sname,eng,math,chem)
{
    let total=eng+math+chem;
    console.log("Total marks: ",total);
    console.log("Student name:",sname);
}
calculateTotalMarks("Ram",80,75,66);


// 6.Hotel Bill
function calculateHotelBill(HotelName,roomPrice,days,numPeople)
{
    let totalBill=roomPrice*days;
    console.log("Welcome to "+HotelName+"Hotel");
    console.log("Hotel Bill: "+totalBill);
    console.log("No of days: "+days);
    console.log("No of people:"+numPeople);
}
calculateHotelBill("Taj",1500,2,4);