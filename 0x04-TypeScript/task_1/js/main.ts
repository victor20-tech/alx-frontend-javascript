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
  firstName: "Jane",
  lastName: "Doe",
  location: "New York",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Teacher name interface
// interface TeacherName {
//   firstName: string;
//   lastName: string;
// }

// print teacher function interface
interface printTeacherFunction  {
  (firstName: string, lastName: string): string;
}

// function printTeacher({firstName: string, lastName: string}: string): string {
//   return `${firstName[0]}. ${lastName}`;
// }

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// const teacherInfo = { firstName: "Alice", lastName: "Wonder" }
// const result = printTeacher(teacherInfo);
// console.log(result);
const result = printTeacher("John", "Doe");
console.log(result); 
