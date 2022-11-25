var bread = 10;
var cheese = 5;
var count = 0;

while (bread >= 2 && cheese >= 1) {
    count++;
    bread = bread - 2;
    cheese = cheese - 1;

}
console.log(count);