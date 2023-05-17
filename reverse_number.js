// Method 1

function reverseGivenInteger(num){
    var numString = num.toString();
    var result = '';
    for(var i=0; i<numString.length; i++){
        result = numString[i] + result;
    }
    return result;
}

console.log(reverseGivenInteger(123456789))


// Method 2

function reverseGivenInteger1(num){
    var reverseNum = 0;
    while(num > 0){
        reverseNum =  (reverseNum * 10) + (num % 10);
        num = Math.floor(num/10)
    }
    return reverseNum;

}

console.log(reverseGivenInteger(123456789))