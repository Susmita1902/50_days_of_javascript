// Write a function which accepts a string argument and returns the 
// count of characters between the first and last character 'X'


function getTheGapX(str){
    var first_char_idx = str.indexOf('X')
    var last_char_idx = str.lastIndexOf('X')
    if(first_char_idx == -1){
        return  -1;
    }
    if(first_char_idx == last_char_idx ){
        return 0;
    }
    
    var result = last_char_idx - first_char_idx -1 ; 
    return  result;

}

console.log(`Gap between the X's: ${getTheGapX('XeroX')}` )