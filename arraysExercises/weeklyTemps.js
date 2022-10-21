function weekTemps() {
    this.dataStore = []
    this.add = add;
    this.average = average;
}


function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}
var thisWeek = new weekTemps();

thisWeek.add([50,48,46,60,50,48,52])

console.log(thisWeek.dataStore())