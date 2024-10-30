{
  type Student = {
    name: string;
    age: number;
    phoneNo: number;
    id: number;
    address: string;
    isCurrentlyStudying?: boolean;
    bloodGroup: "A" | "B" | "AB" | "O";
  };
  type AddFunction = (x: number, y: number, z: number) => number;
  type frontendDeveloper = {
    skills: string[]
    designation1: 'FrontDev'
  }
  type backendDeveloper = {
    skills: string[]
    designation2: 'BackDev'
  }
  type fullStackDeveloper = frontendDeveloper & backendDeveloper
  const s1: Student = {
    name: "Rafi",
    age: 22,
    phoneNo: 1921479294,
    id: 221155362,
    address: "Dhaka",
    isCurrentlyStudying: true,
    bloodGroup: "A",
  };
  const s2: Student = {
    name: "Ferdos",
    age: 21,
    phoneNo: 1921479294,
    id: 221155362,
    address: "Chapai",
    bloodGroup: "O",
  };

  const add: AddFunction = (x, y, z) => {
    return x + y + z;
  };
  const employee1 : fullStackDeveloper = {
    skills: ['html', 'mongodb'],
    designation1: 'FrontDev',
    designation2: 'BackDev'
  }

}
