let sList = ['ab','ac','db','oc']
let queri = ['ay','db','ab']

function checkQuery(stringList, query) {
    let counter = 0
    for(let i=0; i<stringList.length; i++){
        if(query == stringList[i]){
            counter++
        }
    }
    return counter
}
function matchingStrings(stringList,queries){
    let result = []
    console.log(queries)
    for(let j=0; j<queries.length; j++){
        result.push(checkQuery(stringList,queries[j]))
    }
    return result
}

console.log(matchingStrings(sList,queri))