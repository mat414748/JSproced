const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];
const greet = (greeting) => {
    function greetName(object) {
    switch (object.name) {
        case "Joe":
            return "Nice Job "  + object.name + greeting + object.grade;
            break;
        case "Jen":
            return "Excellent Job "  + object.name + greeting + object.grade;
            break;
        case "Steph":
            return "Well done "  + object.name + greeting + object.grade;
            break; 
        case "Allen":
            return "What happened "  + object.name + greeting + object.grade;
            break;
        case "Gina":
            return "Not good "  + object.name + greeting + object.grade;
            break;
    }   
    }
    return greetName;
};
console.log(studentGrades.map(greet(', you got an ')));

const R = require("./ramda.min.js");
const gred = R.curry((greeting, after, namich) => {
    return greeting + " " + after + " " + namich.name;
});
const testich = gred("Baron")("von");
console.log(studentGrades.map(testich))








let counter = 0;
function increment(counter) {
    return counter + 1;
}
for (let i = 0; i < studentGrades.length; i++) {
    counter = increment(counter);
} 
console.log(counter);