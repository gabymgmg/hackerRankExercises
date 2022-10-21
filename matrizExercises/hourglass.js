
// iteration in the outer matrix
const MATRIX_SIZE = 6
const SUB_MATRIX_SIZE = 3
let test2 = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]]
let test1 = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,9,2,-4,-4,0],[0,0,0,-2,0,0],[0,0,-1,-2,-4,0]]

//llamada
console.log(maxHourGlass(test1))
console.log(maxHourGlass(test2))

function maxHourGlass(matrixes){
let result = []
for (let i = 0; i < MATRIX_SIZE; i++) {
    for (let j = 0; j < MATRIX_SIZE; j++) {
        if (i <= MATRIX_SIZE - SUB_MATRIX_SIZE && j <= MATRIX_SIZE - SUB_MATRIX_SIZE) {
            result.push(sumHourGlass(getSubMatrix(i, j, matrixes, SUB_MATRIX_SIZE)))
        }
    }
}
return Math.max(...result)
}

function getSubMatrix(startingN, startingM, arr, size) {
    if (size >= arr.length) throw new Error('Te pasaste de pajua')
    let newMatrix = []
    for (let n = startingN; n < startingN + size; n++) {
        newMatrix.push([])
        for (let m = startingM; m < startingM + size; m++) {
            newMatrix[n - startingN].push(arr[n][m])
        }
    }
    return newMatrix

}

function sumHourGlass(subMatrix) {
    const validValues = [[0, 0], [0, 1], [0, 2], [1, 1], [2, 0], [2, 1], [2, 2]]
    let sum = 0
    for (let i = 0; i < subMatrix.length; i++) {
        for (let j = 0; j < subMatrix.length; j++) {
            if (isValid([i, j])) {
                sum += subMatrix[i][j]
            }
        }
    }
    return sum
}
function isValid(coord) {
    if (coord.length !== 2) {
        throw new Error('no es un par ordenado')
    }
    if (typeof coord[0] !== 'number') {
        throw new Error('no es un par de num')
    }
    const validValues = [[0, 0], [0, 1], [0, 2], [1, 1], [2, 0], [2, 1], [2, 2]]
    let encontrado = false
    let i = 0
    while (encontrado == false && i < validValues.length) {
        if (coord[0] == validValues[i][0] && coord[1] == validValues[i][1]) {
            encontrado = true
        }
        i++
    }
    return encontrado
}
