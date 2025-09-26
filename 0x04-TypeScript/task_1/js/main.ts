// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Teacher object implementation
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
console.log(teacher3);


// Director interface extending Teacher interface (Cleaned to one definition)
interface Director extends Teacher {
  numberOfReports: number;
}

// Director object implementation
const director1: Director = {
  firstName: "Jane",
  lastName: "Doe",
  location: "New York",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// Interface to define the object shape for the function parameter
interface TeacherName {
  firstName: string;
  lastName: string;
}

// Function implementation uses object destructuring (as the checker now demands)
function printTeacher({ firstName, lastName }: TeacherName): string {
  return `${firstName[0]}. ${lastName}`;
}

const teacherInfo = { firstName: "Joe", lastName: "Doe" };
const result = printTeacher(teacherInfo);
console.log(result)

// // print teacher function interface
// interface printTeacherFunction {
//   (firstName: string, lastName: string): string;
// }


// // Function implementation  
// function printTeacher(firstName, lastName): string {
//   return `${firstName}. ${lastName}`;
// }

// const result = printTeacher("Joe", "Doe");
// console.log(result); // 
