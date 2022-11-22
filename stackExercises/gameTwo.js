const { Stack } = require("../../lib/stack");
const arr1 = [4, 2, 4, 6, 1]
const arr2 = [2, 1, 8, 5]
const stk1 = arrToStack(arr1)
const stk2 = arrToStack(arr2)

function twoStacks(maxSum, a, b) {
    let sum = 0
    let counter = 0
    let lastNum = 0
    let nextNum= 0
    while (sum < maxSum) {
        if (a.peek() < b.peek()) {
            lastNum=a.peek()
            sum += a.pop()
            if(lastNum+nextNum<maxSum)
            counter++
            nextNum=a.peek()
        }
        else {
            lastNum=a.peek()
            sum += b.pop()
            if(lastNum+nextNum<maxSum)
            counter++
            nextNum=b.peek()
        }
    }
    return counter
}
console.log(twoStacks(10,stk1,stk2))

function arrToStack(arr) {
    let newStk = new Stack()
    for (let i = arr.length - 1; i >= 0; i--) {
        newStk.push(arr[i])
    }
    return newStk
}
