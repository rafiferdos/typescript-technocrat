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

console.log(NormalPeople1, MilitiaPeole1);

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(`I am a ${this.name} and making sound`);
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I am barking`);
  }
}

class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log(`I am meawing`);
  }
}

const cat = new Cat("daisy", "cat");
const dog = new Dog("tommy", "dog");

const getAnimal = (animal: Animal) => {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
};

// shorthand
const getAnimal2 = (animal: Animal) =>
  animal instanceof Dog
    ? animal.makeBark()
    : animal instanceof Cat
    ? animal.makeMeaw()
    : animal.makeSound();

//another smart way
const isDog = (animal: Animal) : animal is Dog => animal instanceof Dog;
const isCat = (animal: Animal) : animal is Cat => animal instanceof Cat;

const getAnimal3 = (animal: Animal) =>
  isDog(animal)
    ? animal.makeBark()
    : isCat(animal)
    ? animal.makeMeaw()
    : animal.makeSound();
