"use strict";
const my_name = "Rafi Ferdos";
console.log(my_name);
let my_age = 25;
console.log(my_age);
let stringArr = ["Rafi", "Farhana", "Someone"];
let numberArr = [4, 5, 6];
let numeric_coordinates = [3, 4];
let nameAge = ["Rafi", 22];
nameAge[0] = "Farhana";
nameAge[1] = 40;
const nameObj = {
    firstName: "MD",
    middleName: "Rafi",
    lastName: "Ferdos",
    isMarried: false,
    company: "Programming Hero",
    skintone: "dark",
};
function add(number1, number2, defaultNumber = 10) {
    return number1 + number2 + defaultNumber;
}
const arrowAdding = (number1, number2) => number1 + number2;
const mothodInObj = {
    name: "Rafi",
    balance: 36,
    addBalance(balance) {
        return `total balance is ${balance * balance}`;
    },
};
const numericArray = [3, 4, 5, 6, 7];
const newArray = numericArray.map((e) => e * e);
const bros1 = ["joynul", "abedin", "faruk"];
const bros2 = ["jahangir", "alam", "badshah"];
bros1.push(...bros2);
const nameObj1 = {
    next: "Rafi",
    postgre: "Ferdos",
    prisma: "Muhammad",
};
const nameObj2 = {
    python: "Sadia",
    mongodb: "Islam",
    docker: "Athoy",
};
const nameObjCombined = Object.assign(Object.assign({}, nameObj1), nameObj2);
const greetFriends = (...friends) => {
    friends.forEach((f) => console.log(f));
};
greetFriends("abul", "babul", "kabul");
const objDes = {
    name: {
        firstName: "Rafi",
        lastName: "Ferdos",
    },
    age: 22,
    gender: "male",
};
const { age, name: { firstName: FirstName }, // no assignable type, can't use string as type
 } = objDes;
const friends = ['abul', 'kabul', 'babul', 'none', 'rohim', 'korim', 'joshim', 'khairul'];
const [, , , bestFriend, ...rest] = friends;
console.log(bestFriend);
