var matrix = [
    [2, 3, 4, 5],
    [4, 6, 2, 7],
    [9, 4, 3, 1]
]

function matrixSum(matrix){
    var sumOfNum = 0;
    for(var i=0;i<matrix.length; i++){
        for(var j=0; j<matrix[i].length; j++){
            sumOfNum = sumOfNum + matrix[i][j];
        }
        
    }
    return sumOfNum;
}

console.log(matrixSum(matrix));


function matrixRowSum(matrix){
    var val =[];
    for(var i=0; i<matrix.length; i++){
        var sumRow = 0;
        for(var j=0; j<matrix[i].length; j++){
            sumRow = sumRow + matrix[i][j]
           
        }
        val.push(sumRow)
    }
    return val;
}

console.log(matrixRowSum(matrix));