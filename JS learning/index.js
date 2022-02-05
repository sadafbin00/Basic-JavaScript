var num1=parseFloat(prompt("Enter 1st number"));
var num2=parseFloat(prompt("Enter 2nd number"));
sum=num1+num2;
document.write("Output: "+sum.toFixed(2));
document.write("<br>");
document.write("Output: "+sum.toPrecision(5));