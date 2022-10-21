
let test = [1,2,3,4,5,4,3,2,1,3,4]

function migratoryBirds(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    let birdTypeAndNum = []

    for(let i=min; i<=max; i++){
        let currentNumOfBirds = 0
        for(let j=0;j<arr.length;j++){
            if(i==arr[j]){
                currentNumOfBirds++
            }
        }
        birdTypeAndNum.push([i,currentNumOfBirds])
        console.log([i,currentNumOfBirds])

    }
    return getHigherType(birdTypeAndNum)
}
console.log(migratoryBirds(test))

function getHigherType(arr){
    let typeBirds = 0
    let higherNumBirds = 0
    for(let i=0;i<arr.length;i++){
        let currentTypeBird = arr[i][0]
        let currentNumBirds = arr[i][1]
        if(currentNumBirds>higherNumBirds){
            typeBirds=currentTypeBird
            higherNumBirds=currentNumBirds
        }      
    }
    return typeBirds
}
