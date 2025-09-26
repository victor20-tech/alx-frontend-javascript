//Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

//Director interface extending Teacher interface
interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);


//Director interface extending Teacher interface
interface Director extends Teacher {
  numberOfReports: number;
}

//implementation
const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);


// print teacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}

//use the function
console.log(printTeacher("John", "Doe"));
