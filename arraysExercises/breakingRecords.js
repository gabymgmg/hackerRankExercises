let score = [10,5,20,20,4,5,2,25,1]

function breakingRecords(scores) {
    let max = scores[0]
    let min = scores[0]
    let counterMin = 0
    let counterMax = 0
    for(let i=1;i<scores.length;i++){
        if(scores[i]>max){
            counterMax++
            max=scores[i]
        }
        if(scores[i]<min){
            counterMin++
            min=scores[i]
        }
    }
    return [counterMax,counterMin]

}

console.log(breakingRecords(score))
