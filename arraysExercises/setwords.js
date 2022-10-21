function storeWords(...str){
    let backwards = [...str].reverse()
    return 'forward:' + [...str] + '\n'+ 'backwards:' + backwards
}

console.log(storeWords('hola','como', 'estas'))