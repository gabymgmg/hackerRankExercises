         
let matrixB = [[5,6,2,2],[7,8,2,4],[1,2,3,3],[1,2,3,4]]

function rightDiagonal(matrix){
    let diagonal = []
    let len = matrix.length
    for(let i=0;i<len;i++){
        for(let j=len-1;j>=0;j--){
            if(j+i==len-1){
                diagonal.push(matrix[i][j])
            }
        }
    }
    return diagonal 
} 

console.log(rightDiagonal(matrixB))