type AlphaNumeric = string | number;

const add = (x: AlphaNumeric, y: AlphaNumeric): AlphaNumeric => {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return x.toString() + y.toString();
  }
};

console.log(add(5, 9));

type Gender = "male" | "female";
type NormalPeople = {
  name: string;
  gender: string;
  age: number;
};
type Militia = {
  name: string;
  gender: Gender;
  age: number;
  position: string;
};
type AnyPeople = NormalPeople | Militia;

const getPeople = (people: AnyPeople) => {
  if ("position" in people) {
    console.log(
      `My name is ${people.name} and my position is ${people.position}`
    );
  } else {
    console.log(`My name is ${people.name} and my age is ${people.age}`);
  }
};

const NormalPeople1: NormalPeople = {
  name: "abul vai",
  gender: "male",
  age: 46,
};

const MilitiaPeole1: Militia = {
  name: "Qadir",
  gender: "male",
  age: 31,
  position: "colonel",
};

console.log(NormalPeople1, MilitiaPeole1)