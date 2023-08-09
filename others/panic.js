// Recibe palabra o frase y la devuleve en mayuscula.
// Reemplaza los espacios por emojis.

function panic (string){
    const newString = string.replace(/\s/g, '😄');
    return newString.toUpperCase()+'!'
}

console.log(panic('Hola como estas'))
console.log(panic('Hola'))

