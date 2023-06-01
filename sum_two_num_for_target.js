var num = [11,15, 2, 7]; 

var target = 9;

function twoSum(num, target) {
    var index = [];
    for (var i=0;i<num.length; i++){
        for(var j=i+1; j<num.length; j++){
            var sum = num[i] + num[j] 
             console.log(sum)
            if(sum == target){
                index.push(i);
                index.push(j); 
                return  index;
            } 
        }
   }
   return  index;
   
}

function twoSum2(num, target) {
    var index = [];
    for (var i=0;i<num.length; i++){
        var diff = target - num[i];
        console.log(diff);
        for(var j=i+1; j<num.length; j++){
            if(num[j] == diff){
                index.push(i);
                index.push(j); 
                return  index;
            } 
        }
   }
   return  index;
   
}

console.log(twoSum(num, target))




// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].