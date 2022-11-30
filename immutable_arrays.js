const shield = [
    {
        name: "beb",
        age: 10
    },
    {
        name: "geb",
        age: 16
    }
]
const secondShield = [
    ...shield,
    {
        name: "gladiator",
        age: 25
    }
]

function changeData(shielder) {
    if (shielder.name == "gladiator") {
        return {...shielder, age: 30, rang: "Dominator"}
    }
    return shielder;
}
const thrithShield = secondShield.map(changeData);

const ages = [];
const fourthShield = thrithShield.filter((shielder) => {
    ages.push(shielder.age); 
    return shielder.age != Math.min(...ages);
});

const numbersStorm = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
const total = numbersStorm.reduce((a, g) => a + g);
const average = total / numbersStorm.length;

const groupNumbers = (group, number) => {
    const { good = 0, ok = 0, bad = 0 } = group;
    if (number >= 4) {
        return {...group, good: good + 1};
    } else if (number >= 2.5) {
        return {...group, ok: ok + 1};
    } else {
        return {...group, bad: bad + 1}; 
    }
};
const gradulation = numbersStorm.reduce(groupNumbers, {});
console.log(gradulation);
