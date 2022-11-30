var list = {
    name: "a",
    age: 12,
    auto: "lada",
    chips: [
        {
            name: "lays"
        },
        {
            name: "pringls"
        }
    ]
};
const arra = ["j","b","g"];
arra.push(list);
arra.splice(0, 1);
arra.splice(arra.length-1, 1);
for (let i = 0; i < arra.length; i++) {
    console.log(arra[i]);
}


