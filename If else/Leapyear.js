var read = require("readline-sync")
var year=read.question("Enter a year : ")
if(year>=1000 && year<=9999)
{
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    {
        console.log(year + " is a leap year")
    }
    else
    {
        console.log(year + " is not a leap year")
    }
}
else
{
    console.log("Invalid input")
} 