// exercise: create a matrix a mtrix of SIZExSIZE with user's input. Then, show
// the possibles (SIZE-1)x(SIZE-1) matrixes.


// declaring te size of the matrix
const MATRIX_SIZE = 6
const SUB_MATRIX_SIZE = 3
// creating the array to fill
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
// iteration in the outer matrix
let inputArray = createMatrix(MATRIX_SIZE,MATRIX_SIZE)
for(let i=0;i<MATRIX_SIZE;i++){
    for(let j=0; j<MATRIX_SIZE;j++){
        if(i<=MATRIX_SIZE-SUB_MATRIX_SIZE && j<=MATRIX_SIZE-SUB_MATRIX_SIZE){
            console.log('Your reduced matrix is:')
            console.log(getSubMatrix(i,j,inputArray,SUB_MATRIX_SIZE))
        }
    }
}
// function to get the sub matrix
function getSubMatrix(startingN,startingM,arr,size){
    let newMatrix = []
    for(let n=startingN; n<startingN+size;n++){
        newMatrix.push([])
        for(let m=startingM; m<startingM+size;m++){
            newMatrix[n-startingN].push(arr[n][m])
        }
    }
    return newMatrix
}