function sum(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
sum(5,10);

function tempTranslate(celsius) {
    console.log(celsius * 1.8 + 32);
}
tempTranslate(10);

var anonymus = (first, second) => {
    console.log(first % second);
}
anonymus(10,5);
anonymus(5,10);
anonymus(5,5);
(() =>{
    console.log("ma");
});