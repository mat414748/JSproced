const defence = {
    name: "name",
    surname: "sur",
    age: 10
}
const secondDefence = {
    ...defence,
    hobby: "dance"
}
const trithDefence = {
    ...secondDefence,
    name: "Alla"
}
const {age, ...fourthDefence} = trithDefence;
console.log(fourthDefence)