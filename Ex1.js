//Creating the variables
var greeting = "hello";
var name = "world";

//alert the message
var txt = alert(greeting + " " + name);

//reges to change the output
var text = greeting + " " + name;
var a = text.replaceAll(/l/g, "1");
a = a.replaceAll(/o/g, "0");

//function to reverse the result
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString(a));