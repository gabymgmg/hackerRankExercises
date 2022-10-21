let arr=[1,3,2,6,1,2]

function divisibleSumPairs(n,k,ar){
    let result = []
    for(let i=0; i<ar.length; i++){
        for(let j=i+1;j<ar.length; j++){
            if((ar[i]+ar[j]) % k ==0){
                result.push([ar[i],ar[j]])
            }
        }
    }
    return result.length
}

console.log(divisibleSumPairs(6,3,arr))