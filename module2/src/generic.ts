{
  const strArr: Array<string> = ["Rafi", "Ferdos", "doing", "intern"];
  const numArr: Array<number> = [3, 4, 5, 6, 7];
  const floArr: Array<number> = [4.34, 54.23];
  const booArr: Array<boolean> = [true, false, false, true];

  //generic array
  type GArray<T> = Array<T>;
  type GTuple<X, Y> = [X, Y];
  const strArrG: GArray<string> = ["farhana", "kamal"];
  const numArrG: GArray<number> = [3, 4, 5, 6, 7, 8, 10, 9];

  const numAndStrObj: GArray<{ name: string; age: number }> = [
    {
      name: "Rafi",
      age: 22,
    },
    {
      name: "Ferdos",
      age: 21,
    },
  ];

  const GAddFunc = <T extends { num1: number; num2: number }>(obj: T): number =>
    obj.num1 + obj.num2;

  const poshu: GTuple<string, string> = ["lion", "cheetah"];
  const bostu: GTuple<string, { designation: string; birthMonth: string }> = [
    "Rafi",
    {
      designation: "Full Stack Dev (intern)",
      birthMonth: "Nov",
    },
  ];

  console.log(GAddFunc({ num1: 5, num2: 10 }));
  console.log(poshu);
  console.log(bostu);
}
