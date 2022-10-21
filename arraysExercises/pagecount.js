
console.log(pageCount(2,1))
function pageCount(n, p) {
    let minPage = 0
    let filledArr = createArray(n,2)
    if(p<=Math.trunc(n/2)){
        for(let i=0;i<filledArr.length;i++){
            for(let j=0;j<filledArr[i].length;j++){
                if(p==filledArr[i][j]){
                    minPage=i
                }
            }
        }
        return minPage
    } 
    else { 
        for(let i=filledArr.length-1;i>=0;i--){
            for(let j=0;j<filledArr[i].length;j++){
                console.log(filledArr[i][j])
                if(p==filledArr[i][j]) {
                    minPage=filledArr.length-i-1
                }
            }
        }
        return minPage
    }
}

function createArray(length,numPositions){
    let newArr = []
    let num = 0
    for(let i=0; i<=length/2; i++){
        newArr.push([])
        for(let j=0;j<numPositions;j++){
            newArr[i].push(num)
            num++  
        }
    }
    return newArr
}
console.log(createArray(5,2))
