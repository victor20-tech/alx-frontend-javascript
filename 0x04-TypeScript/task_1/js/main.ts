//Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

//Teacher object implementations
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
//print teacher3
console.log(teacher3);


//Director interface extending Teacher interface
interface Director extends Teacher {
  numberOfReports: number;
}

//Director interface extending Teacher interface
interface Director extends Teacher {
  numberOfReports: number;
}

//Director object implementation
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
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
}

//use the function
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
