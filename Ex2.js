var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
    greet = "Good Mornin";
else if (hrs >= 12 && hrs <= 15)
    greet = "Good Afternoon";
else if (hrs >= 16 && hrs <= 18)
    greet = "Good evening";
else if (hrs >= 19 && hrs <= 24)
    greet = "Good night";

console.log(greet);
