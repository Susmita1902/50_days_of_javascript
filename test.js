// const str = "JavaScript is awesome"

// function reverseAString(str) {
//     // write your solution here

//     return
// }

// console.log(`Reversed string is: ${reverseAString(str)}`)

var d = [1, 2]

var data = [
    [
        3, 2, {
            'a': 1, 
            'b': 2, 
            'c': 3
        }
    ],
    [
        5, 7, {
            'x': 1, 
            'y': 2
        }, {
            'g': 5,
            'k': 10
        }
    ]

]



function testData(data){
    var result = '';
    var idx = 0;
    for(val of data){
        console.log(idx + ': ', val)
        idx++;
        for(elem of val){
            // console.log(elem, ': ', typeof(elem));
            if(typeof(elem) != 'number'){
                for(key of Object.keys(elem)){
                    result = key;
                    result = result + key;
                }
            }
        }
        // for (elem of Object.keys(val[2])){
        //     result = result + elem;
        // }
    }
    return result;
}

var data = [
    [
        3, 2, {
            'a': 1, 
            'b': 2, 
            'c': 3
        }
    ],
    [
        5, 7, {
            'x': 1, 
            'y': 2
        }, {
            'g': 5,
            'k': 10
        }
    ]

]

// function testData(data){
//     var result = 0;
//     var idx = 0;
//     for(val of data){
//         console.log(idx + ': ', val)
//         idx++;
//         for(elem of val){
//             // console.log(elem, ': ', typeof(elem));
//             if(typeof(elem) != 'number'){
//                 for(val_ of Object.values(elem)){
//                     // result = val_ //2
//                     result = result + val_;
//                 }
//             }
//         }
//         // for (elem of Object.keys(val[2])){
//         //     result = result + elem;
//         // }
//     }
//     return result;
// }

console.log(testData(data));

var y = 25;
var z = 13;
var str = 'susmita'
var length = str.length;

console.log(str[y - z - 8]);


