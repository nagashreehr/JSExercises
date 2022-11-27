function nearnumber(array, value) {
    let result;
    let x = 0;
    let dist = [];
    for (var i = 0; i < array.length; i++) {
        if (value == array[i]) {
            x = i;
        }
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] > value) {
            var temp1 = Math.abs(x - i);
            dist.push(temp1);
        }
    }
    let temp;
    for (var i = 0; i < dist.length - 1; i++) {
        temp = Math.min(...dist);
    }
    res = array[temp + x];
    console.log(res);
}

var a = [1, 4, 3, 2, 5, 7];
nearnumber(a, 2);