{
  const my_name: string = "Rafi Ferdos";
  console.log(my_name);

  let my_age: number = 25;
  console.log(my_age);

  let stringArr: string[] = ["Rafi", "Farhana", "Someone"];
  let numberArr: number[] = [4, 5, 6];

  let numeric_coordinates: [number, number] = [3, 4];

  let nameAge: [string, number] = ["Rafi", 22];
  nameAge[0] = "Farhana";
  nameAge[1] = 40;

  const nameObj: {
    company: "Programming Hero";
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
    readonly skintone: "dark";
  } = {
    firstName: "MD",
    middleName: "Rafi",
    lastName: "Ferdos",
    isMarried: false,
    company: "Programming Hero",
    skintone: "dark",
  };

  function add(
    number1: number,
    number2: number,
    defaultNumber: number = 10
  ): number {
    return number1 + number2 + defaultNumber;
  }

  const arrowAdding = (number1: number, number2: number): number =>
    number1 + number2;

  const mothodInObj = {
    name: "Rafi",
    balance: 36,
    addBalance(balance: number): string {
      return `total balance is ${balance * balance}`;
    },
  };

  const numericArray: number[] = [3, 4, 5, 6, 7];
  const newArray: number[] = numericArray.map((e: number): number => e * e);

  const bros1: string[] = ["joynul", "abedin", "faruk"];
  const bros2: string[] = ["jahangir", "alam", "badshah"];

  bros1.push(...bros2);

  const nameObj1: {
    next: string;
    prisma: string;
    postgre: string;
  } = {
    next: "Rafi",
    postgre: "Ferdos",
    prisma: "Muhammad",
  };
  const nameObj2: {
    python: string;
    docker: string;
    mongodb: string;
  } = {
    python: "Sadia",
    mongodb: "Islam",
    docker: "Athoy",
  };

  const nameObjCombined: {
    next: string;
    prisma: string;
    postgre: string;
    python: string;
    docker: string;
    mongodb: string;
  } = {
    ...nameObj1,
    ...nameObj2,
  };

  const greetFriends = (...friends: string[]) => {
    friends.forEach((f: string) => console.log(f));
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

  const {
    age,
    name: { firstName: FirstName }, // no assignable type, can't use string as type
  } = objDes;

  const friends: string[] = [
    "abul",
    "kabul",
    "babul",
    "none",
    "rohim",
    "korim",
    "joshim",
    "khairul",
  ];
  const [, , , bestFriend, ...rest] = friends;
  console.log(bestFriend);
}
