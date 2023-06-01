const str = 'Codedamn is the best place to learn to code'
const wordLimit = 5
// const str = 'JavaScript is simple but not easy to master';
// const wordLimit = 3

function truncateWithWordLimit(str, wordLimit){
   
     var splitStrings = str.split(' ').slice(0,wordLimit).join(' ');
     return splitStrings
    // console.log (splitStrings)
}
console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
