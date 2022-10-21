const test = [1,2,1,3,2]
const test2 = [4] 
//dm 4 1


function birthday(s, d, m) {
    let counter = 0
    let testing =[]
    for(let i=0; i<=s.length-1; i++){
        if(sum(s.slice(i,i+m))==d){
            counter++
        } 
    }

    return counter
}
console.log(birthday(test,3,2))


function sum(arr){
    let result = 0
    for(let i=0;i<arr.length;i++){
        result += arr[i]
    }
    return result
}
