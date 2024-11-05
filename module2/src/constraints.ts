{
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "NLWD";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    id: 1234,
    name: "Rafi",
    email: "x@y.com",
    age: 22,
  });
  const student2 = addCourseToStudent({
    id: 123,
    name: "Rafi",
    email: "x@y.com",
    age: 22,
  });
  const student3 = addCourseToStudent({
    id: 12,
    name: "Ferdos",
    email: "xs@gmail.com",
    destiny: "toAllah",
  });
  console.log(student1);

  // using keyof

  type Computer = {
    Windows: string;
    Mac: string;
    Linux: string;
  };
  type User = "Windows" | "Mac" | "Linux"; //manually
  type UserNew = keyof Computer; //auto

  const person1: User = "Linux";
  const person2: UserNew = "Mac";

  const getPropertyKey = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
}
