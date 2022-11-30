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
console.log(list["name"],list["age"],list["auto"], list["chips"][0]["name"]);