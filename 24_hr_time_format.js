
// Example 1

const time = '7:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here
    var split_strs = time.split(':');
    var hour_str = split_strs[0];
    var min_str = split_strs[1].slice(0, -2);
    var AMPM = split_strs[1].slice(-2, );
    
    console.log(hour_str, min_str, AMPM);
    
    // return hour_str;
    if( AMPM == "PM" && hour_str<12){
        hour_str = (parseInt(hour_str) + 12).toString();

    }
   else if( AMPM == "AM" && hour_str==12){
        hour_str = '00';
    }
    if(hour_str.length==1){
        hour_str = '0' + hour_str;
    }
    return hour_str + ':'  + min_str;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)





// example 2
//  '07:10:40PM';


function convert12HrTo24Hr(time){
    var split_string = time.split(':');
    console.log(split_string)
    var hrs_string = split_string[0];
    var mins_string = split_string[1];
    var secs_strring = split_string[2].slice(0,-2);
    var ampm_string = split_string[2].slice(-2);
    if(ampm_string == 'PM' && hrs_string < 12){
        hrs_string = parseInt(hrs_string) + 12;
    }
    else if(ampm_string == 'AM' && hrs_string == 12){
        hrs_string = '00'
    }
    if(hrs_string.length==1){
        hrs_string = '0' + hrs_string;
    }

    return hrs_string + ':'+mins_string+ ':'+secs_strring

}

console.log(`Converted time: ${convert12HrTo24Hr('7:10:40AM')}`)
// console.log(split_string)