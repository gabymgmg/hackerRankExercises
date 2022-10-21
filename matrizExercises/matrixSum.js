let matriz1 = [[1,1,0],[1,0,0],[1,2,3]]
let matriz2 = [[0,1,1],[0,0,2],[0,0,3]]

function areMatrixesCompatible(matrix1,matrix2){
    const rowsMatrix2 = matrix2.length
    const columnsMatrix1 = matrix1[0].length
    console.log(columnsMatrix1)
    
    if(columnsMatrix1 == rowsMatrix2){
        return true
    } else {
        throw new Error('matrices are not compatible')
    }
}

function matrixSum(matrix1,matrix2){
    let resultingMatrix=[]
    for(let i=0;i<matrix1.length;i++){
        resultingMatrix.push([])
        for(let j=0;j<matrix1[i].length;j++){
                let sumij= matrix1[i][j]+matrix2[i][j]
                resultingMatrix[i].push(sumij)
            }
        }
        return resultingMatrix
    }
console.log(matrixSum(matriz1,matriz2))