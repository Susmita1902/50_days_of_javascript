const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanToInt(roman){
    var num = 0;
    for(var i=0; i<roman.length; i++){
        if (i != roman.length - 1){
            if(romanHash[roman[i]] < romanHash[roman[i+1]]){
                num = num -  romanHash[roman[i]];
            }
            else{
                num = num + romanHash[roman[i]];
            }
        }
        else{
            num = num + romanHash[roman[i]];
        }
    }
    return num;
}

console.log(romanToInt('CDXLI'))