// Retorna una frase en mayuscula , en minicusla con la palabra shh
// Remueve el !, en vcaso de tenerlo originalmente.

function whispering(str){
    let copyStr = str;
    if(copyStr.includes('!')){
        copyStr = copyStr.slice(0,copyStr.length-1)
    }    
    return 'shh...' + copyStr.toLowerCase();
}

console.log(whispering('HOLACOMOESTAS JAJA!'))