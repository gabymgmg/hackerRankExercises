let array = [5,6,2,3]

function leftRotation (arr,d){
    let copyArr = [...arr]
    for(let i=0;i<d;i++){
        copyArr.push(copyArr.shift())
    }
    return copyArr
}

console.log(leftRotation(array,2))

function rightRotation (arr,d){
    let copyArray = [...arr]
    for(let i=0;i<d;i++){
        copyArray.unshift(copyArray.pop())
    }
    return copyArray
}

console.log(leftRotation(array,2))
