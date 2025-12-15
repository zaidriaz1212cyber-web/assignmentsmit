var age = (prompt("Enter your age:"));

if (age < 18) {
    alert("You are a minor.");
} else {
    alert("You are an adult.");
}


var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var operator = prompt("Enter an operator (+, -, *, /):");

var result; 
if (operator === "+"){
    result = num1 + num2;
}
else if (operator === "-"){
    result = num1 - num2;
}
else if (operator === "*"){
    result = num1 * num2;
}
else if (operator === "/"){
    result = num1 / num2;
}else{
    result = "Invalid operator";

}




// strings

var firstName1 = prompt("Enter your first name:");
var lastName2 = prompt("Enter your last name:");

var fullName = firstName1 + " " + lastName2;
alert("Hello, " + fullName + "!");



// for loops

var n1 = 1;
var n2 = 2;
var n3 = 3;
var n4 = 4;
var n5 = 5;
var n6 = 6;
var n7 = 7;
var n8 = 8;
var n9 = 9;
var n10 = 10;


console.log(n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10);