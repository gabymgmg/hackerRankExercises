function getSubMatrix(startingN,startingM,arr,size){
    if (size >= arr.length) throw new Error('Te pasaste de pajua')
    let newMatrix = []
    for(let n=startingN; n<startingN+size;n++){
        newMatrix.push([])
        for(let m=startingM; m<startingM+size;m++){
            newMatrix[n-startingN].push(arr[n][m])
        }
    }
    return newMatrix
}

function createMatrix(row,col) {
    let matrix = [];
    const prompt = require('prompt-sync')();
    for (let i = 0; i < row; i++) {
        matrix.push([]);
        for (let j = 0; j < col; j++) {
            var question = prompt('insert value for position '+ [i]+[j]+':')
            matrix[i][j] = question
        }
    }
    console.log('Matrix from your input:')
    return matrix
}