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
