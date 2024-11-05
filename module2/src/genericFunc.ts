{
  const addCourseToStudent = <T>(student: T) => {
    const course = "NLWD";
    return { ...student, course };
  };

  const student1 = addCourseToStudent({
    name: "Rafi",
    email: "x@y.com",
    age: 22,
  });
  console.log(student1);
}
