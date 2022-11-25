var text = "The quick brown fox";
var myArray = text.split(" ");



function pig(myArray) {
    var a = [];
    let firstletter = myArray.charAt(0);

    a = myArray.slice(1);
    a += firstletter + "ay";
    return a;
}
console.log(myArray.map(pig));