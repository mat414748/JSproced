const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';
const R = require("./ramda.min.js");

const countOfNumber = (str) => {
    return str.replace(/[^0-9]/g, '').length;
};
const replaceWhiteSpaces = (str) => {
    return str.replace(/\s/g, "");
};
 const mixer = R.compose(countOfNumber, replaceWhiteSpaces);
 console.log(mixer(sentence));