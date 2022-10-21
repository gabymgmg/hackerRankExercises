function getMoneySpent(keyboards, drives, b) {
    let result = []
    
    for(let i=0;i<keyboards.length;i++){
        for(let j=0;j<drives.length;j++){
            if(keyboards[i]+drives[j]<=b){
                result.push(keyboards[i]+drives[j])
            } if(keyboards[i]+drives[j]>b){
                result.push(-1)
            } 
        }
    }
    return Math.max(...result)
}
console.log(getMoneySpent([3,1],[5,2,8],10))
