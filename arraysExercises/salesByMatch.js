const test = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
    let tupla = Array(100).fill(0)
    for(i=0;i<ar.length;i++){
        let tipoToPosition = ar[i]-1
        tupla[tipoToPosition]++
    }
    return getNumPairs(tupla)
}
console.log(sockMerchant(9,test))

function getNumPairs(array){
    let numOfPairs = 0
    for(let i=0; i<array.length;i++){
        numOfPairs+= Math.trunc(array[i]/2)
    }
    return numOfPairs
}

