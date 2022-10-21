let test1 = [2,4]
let test2 = [16,32,96]

function getTotalX(a, b) {
    let range = a.concat(b)
    let max = Math.max(...range)
    let min = Math.min(...range)
    let counter = 0
    let l = min
    //loop through the range
    while(l>=min && l<=max){
        if(areFactorsOf(l,a,b)==true){
            counter++
        }
        l++
    }
    return counter
}

console.log(getTotalX(test1,test2))

function areFactorsOf(int,a,b){
    let theyAre = true
    let itIs = true
    let i = 0
    let j = 0
    //int being numerator
    while(i<a.length && theyAre){
        if(int%a[i]==0){
            i++
        } else {
            theyAre = false
        }
    }
    //int being demoninator
    while(j<b.length && itIs){
        if(b[j]%int==0){
            j++
        } else {
            itIs = false
        }
    }
    //returning a boolean
    return itIs && theyAre
}
