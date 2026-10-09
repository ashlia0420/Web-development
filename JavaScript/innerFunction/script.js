function outer()
{
    console.log("Outer Function");
    function inner()
    {
        console.log("Inner function");
    }
    inner();
}
outer();

//closure object
function parent(x)
{
    let food="biriyani"; 
    
    function child()
    {
        //how the child fucntion is remembering the outer class variable, here food?
        //by using this closure object child function can access the properties of parent function
        console.log("Today's food is",food);
        console.log(x);
        
    }
    child();
}
parent(200);



function f1(a){
    function f2(){
        console.log(a);
        
    }
    f2();
}
f1(500)

function calculateSalary(sal)
{
    function calculateBonus()
    {
        let bonus=sal*10/100;
        return bonus;
    }
    // let res=calculateBonus();
    // return res+sal; 
                  //both same
    return calculateBonus()+sal;
}
let total=calculateSalary(50000);
console.log(total);

function calculateCart(quantity,price)
{
    function calculateTotal()
    {
        return quantity*price;
    }
    let res=calculateTotal();
    return res;
}
let totAmount=calculateCart(5,700);
console.log("total Amount:",totAmount);

