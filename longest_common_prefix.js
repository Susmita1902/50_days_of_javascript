var strs = ["flower","flow","flowht", "flo"]

function getMinstrLength(strs){
    var minLength = strs[0].length;
    for(var i=1; i<strs.length; i++){
        if(minLength > strs[i].length){
            minLength = strs[i].length;
        }
    }
    return minLength;
}

// function longestCommonPrefix(strs){
//     var lcp = '';
//     var minLength = getMinstrLength(strs);
//     for(var i=0; i<minLength; i++){
//         for(var j=1; j<strs.length; j++){
//             if(strs[0][i] != strs[j][i]){
//                 return lcp;
//             }
//         }
//         lcp = lcp + strs[0][i];
//     }
//     return lcp;
// }

function longestCommonPrefix(strs){
    var lcp = '';
    for(var i=0; i<strs[0].length; i++){
        for(var j=1; j<strs.length; j++){
            if(strs[j].length <= i){
                return lcp;
            } 
            if(strs[0][i] != strs[j][i]){
                return lcp;
            }
        }
        lcp = lcp + strs[0][i];
    }
    return lcp;
}

console.log(longestCommonPrefix(strs))