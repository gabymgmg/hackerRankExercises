function student() {
    this.grades = [];
    this.addGrade = addGrade;
    this.average = average;
}


function addGrade(gradeNum) {
    this.grades.push(gradeNum)
};

function average() {
    let total = 0
    for (let i = 0; i < this.grades.length; i++) {
        total += this.grades[i]
    }
    return total / this.grades.length
};


const gaby = new student();
gaby.addGrade(50)
gaby.addGrade(48)
gaby.addGrade(52)
console.log('average:'+ gaby.average())

