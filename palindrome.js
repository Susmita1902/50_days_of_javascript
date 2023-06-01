// Method 1------String
function isPalindrome(val){
    for(var i=0;i<val.length/2;i++){
        if(val[i] != val[val.length-1-i]) {
            return false;
        }
    }
    return true;
    
}
console.log(`is a valid palindrome: ${isPalindrome('assa')}`)

// Method 2------Number

function palindrome(reverseNum,num){
    if(reverseNum==num){
        return true
    }
    return false;

}

function reverseNum(num){
    var reverseNum = 0;
    while(num>0){
        reverseNum = reverseNum * 10 + (num % 10);
        num = Math.floor(num/10);
    }
    return reverseNum;
}

function palindrome(num){
    if(reverseNum(num) == num){
        return true
    }
    return false;

}

console.log(`is a valid palindrome: ${palindrome(12121)}`)

