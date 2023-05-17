// Method 1
function reverseAString(str){
    var reverse = '';
    for(var i=0; i<str.length; i++ ){
        reverse = reverse + str[str.length - i -1]
    }
    return reverse;
}

console.log(reverseAString("JavaScript is awesome"));


// Method 2
function reverseAString1(str){
    var reverse = '';
    for(ch of str){
        reverse = ch + reverse;
    }
    return reverse;
}
console.log(reverseAString1("JavaScript is awesome"));

// Method 3

function reverseAString2(str){
    var reverse = '';
    for(var i=str.length-1; i>=0; i--){
        reverse = reverse + str[i];
    }
    return reverse;
}
console.log(reverseAString2("JavaScript is awesome"));