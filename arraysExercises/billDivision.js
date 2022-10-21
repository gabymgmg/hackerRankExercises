function bonAppetit(bill, k, b) {
    let bSum = 0
    for(let i=0;i<bill.length;i++){
        if(i!==k){
            bSum+=bill[i]
        }
    }
    let bResulting = bSum/2
    if(bResulting==b){
        return 'Bon Appetit'
    } else {
        return Math.abs(bResulting-b)
    }
}
console.log(bonAppetit([3,10,2,9],1,12))