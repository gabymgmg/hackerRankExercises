const test1 = 'UDDDUDUU'

function countingValleys(steps, path){
    let isInValley = false
    let valleys = 0
    let level = 0
    const arrPath = path.split('')

    for(let i=0;i<steps;i++){
        if(arrPath[i]=='U'){
            level++ 
        } 
        else {
            level--
        } 
        if(level<0){
            isInValley=true
        }
        if(level==0 && isInValley==true){
            valleys++
            isInValley=false
        }
    } 
    return valleys
}
console.log(countingValleys(8,test1))