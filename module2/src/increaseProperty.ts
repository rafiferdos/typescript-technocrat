{
  interface Student {
    name: string;
    university: string;
  }
  type Teacher = {
    name: string;
    university: string;
  };
  // now increase
  interface studentWithID extends Student {
    id: number;
  }
  type teacherWithID = Teacher & { id: number };

  const s1: studentWithID = {
    name: "Rafi",
    university: "DIU",
    id: 5362,
  };

  const t1: teacherWithID = {
    name: "babul",
    university: "kabul",
    id: 5555,
  };

  console.log(s1, t1);

  type Add = (num1: number, num2: number) => number;
  interface Subtract {
    (num1: number, num2: number): number;
  }
  const add: Add = (num1, num2) => num1 + num2;
  const subtract: Subtract = (num1, num2) => num2 - num1;
  console.log(add(10, 12));
  console.log(subtract(10, 25));
  //interface best for object
}
