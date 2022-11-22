const { Stack } = require("../../lib/stack");

function twoStacks(maxSum, a, b) {
    let case1 = from1Stack(maxSum, a, b)
    let case2 = from2Stacks(maxSum, a, b)
    if(case1>case2){
        return case1
    } else {
        return case2
    }
}

function from2Stacks(maxSum, a, b) {
    let counterA = 0
    let counterB = 0
    let notExceed = true
    let cB = b
    let cA = a
    let peekA = a.shift()
    let peekB = b.shift()
    while (notExceed) {
        let tempSum = peekA + peekB
        if (tempSum > maxSum) {
            notExceed = false
        } else {
            peekA += cA.shift()
            peekB += cB.shift()
            counterA++
            counterB++
        }
    }
    return counterA+counterB
}
function from1Stack(maxSum, a, b) {
    let counterA = 0
    let counterB = 0
    let cA = a
    let cB = b
    let peekSa = cA.shift()
    let peekSb = cB.shift()
    let notExceedA = true
    let notExceedB = true
    let notExceed = true
    while (notExceedA) {
        if (peekSa > maxSum) {
            notExceedA = false
        }
        else {
            peekSa += cA.shift()
            counterA++
        }
    }
    while (notExceedB) {
        if (peekSb > maxSum) {
            notExceedB = false
        }
        else {
            peekSb += cB.shift()
            counterB++
        }
    }
    if (counterA>counterB){
        return counterA
    } else {
        return counterB
    }
}
let a = [4,2,4,6,1]
let b = [2,1,8,5]
console.log(twoStacks(10,a,b))