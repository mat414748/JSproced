const fortune = Math.random();
if (fortune > 0.5) {
    console.log("Bigger than 0.5");
} else if (fortune > 0.25) {
    console.log("Bigger than 0.25 but less than 0.5");
} else {
    console.log("Less then 0.25");
}

const fullHaus = Math.floor(Math.random() * 5);
if (fullHaus == 1) {
    console.log("1");
} else if (fullHaus == 3) {
    console.log("3");
} else {
    console.log("another number");
}

// for (const aga of array) { console.log(aga);}