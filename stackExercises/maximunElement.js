const { Stack } = require("../../lib/stack");

let test = [
    '1 72157563', '2', '1 20',
    '2', '1 26', '1 20',
    '2', '3', '1 91',
    '3'
]
function getMax(operations) {
    let answer = new Stack()
    let maxValue = 0
    let result = []
    let replacedValues = new Stack()
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].length > 1) {
            let value = Number(operations[i].split(' ')[1])
            let op = operations[i].split(' ')[0]
            if (op == '1') {
                answer.push(value)
                if (maxValue <= value) {
                    maxValue = value
                    replacedValues.push(maxValue)
                }
            }
        }
        else if (operations[i] == '2') {
            let poppedValue = answer.pop()
            if (poppedValue == maxValue) {
                replacedValues.pop()
                maxValue = replacedValues.peek() || 0
            }
        }
        else if (operations[i] == '3') {
            result.push(maxValue)
        }
    }
    return result
}

console.log(getMax(test))