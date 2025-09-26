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


// print teacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation  
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

const result = printTeacher("Joe", "Doe");
console.log(result); // 
