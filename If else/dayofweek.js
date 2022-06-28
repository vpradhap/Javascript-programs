var read = require("readline-sync")
var input=read.question("Enter a number between 0 to 6 : ")
if(input==0)
{
    console.log("Sunday")
}
else if(input==1)
{
    console.log("Monday")
}
else if(input==2)
{
    console.log("Tuesday")
}
else if(input==3)
{
    console.log("Wednesday")
}
else if(input==4)
{
    console.log("Thrusday")
}
else if(input==5)
{
    console.log("Friday")
}
else if(input==6)
{
    console.log("Saturday")
}
else
{
    console.log("Invalid input")
}