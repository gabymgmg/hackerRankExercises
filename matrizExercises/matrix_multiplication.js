let matrixA = [[1,2,4],[3,4,4]]              
let matrixB = [[5,6,2],[7,8,2],[1,2,3]]

// check if rows and columns are compatible
function areMatrixesCompatible(matrix1,matrix2){
    const rowsMatrix2 = matrix2.length
    const columnsMatrix1 = matrix1[0].length    
    if(columnsMatrix1 == rowsMatrix2){
        return true
    } else {
        throw new Error('matrices are not compatible')
    }
}

function multiyplyMatrix(matrix1,matrix2){
    if(areMatrixesCompatible(matrix1,matrix2)==true){
    let resultingMatrix=[]
        for(let i=0;i<matrix1.length;i++){
            resultingMatrix.push([])
            for(let j=0;j<matrix2[0].length;j++){
                let multip = 0
                for(let k=0;k<matrix1[0].length;k++){
                    multip += matrix1[i][k]*matrix2[k][j]
                }
                resultingMatrix[i][j]=multip
            }
        }
    return resultingMatrix  
    } 
}

console.table(multiyplyMatrix(matrixA,matrixB))