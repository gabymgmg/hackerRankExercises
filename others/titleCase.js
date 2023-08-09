// Convierte solo las primeras letras de la frase en mayusculas.

function titleCase(str){
    const splitted = str.split(' ')
    const result = splitted.map(title => title.replace(title[0],title[0].toUpperCase()));
    return result.join(' ');
}

console.log(titleCase('hola como estas'))