const pattern = /(\+91|0){0,1}[\s]{0,1}[0-9]{10}/g;

// const pattern ='^[\-\+0-9]{1,13}$';
var text = '09876543210';

matches = text.match(pattern);

console.log('matches: ', matches)

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)