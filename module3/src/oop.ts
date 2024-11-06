{
  class Animal {
    species: string;
    actualName: string;
    sound: string;
    hand?: number;
    leg?: number;

    constructor(
      species: string,
      actualName: string,
      sound: string,
      hand?: number,
      leg?: number
    ) {
      this.species = species;
      this.actualName = actualName;
      this.hand = hand;
      this.leg = leg;
      this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.actualName} sounds ${this.sound}`);
    }
  }

  const dog = new Animal("dog", "kutta", "vau vau", 4, 4);
  dog.makeSound();

  // inheritance
  class Cockroach extends Animal {
    miniLegs: number;
    constructor(
      species: string,
      actualName: string,
      sound: string,
      miniLegs: number
    ) {
      super(species, actualName, sound);
      this.miniLegs = miniLegs;
    }
  }
  const cockroach1 = new Cockroach(
    "cockroach-mini",
    "telapoka",
    "zeep zeep",
    8
  );
  cockroach1.makeSound();

  // using shortcut
  class shortAnimal {
    constructor(
      public species: string,
      public actualName: string,
      public sound: string,
      public hand?: number,
      public leg?: number
    ) {}
    makeSound2() {
      console.log(`The ${this.actualName} sounds ${this.sound}`);
    }
  }
  const cat = new shortAnimal("cat", "billi", "meaw meaw", 4, 4);
  cat.makeSound2();
}
