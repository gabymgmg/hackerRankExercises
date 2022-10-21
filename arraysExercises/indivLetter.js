function indivletters() {
    this.letters = [];
    this.addLetters = addLetters;
    this.joinLetters = joinLetters;
}
function addLetters(...letter) {
    this.letters.push(...letter)
}
function joinLetters(str) {
    return this.letters.join('')
}
const word = new indivletters()
word.addLetters('a','l','o',' ','c','o','m','o',' ','e','s','t','a','s?')
console.log(word.joinLetters())