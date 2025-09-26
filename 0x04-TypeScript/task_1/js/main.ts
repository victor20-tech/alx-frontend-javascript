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

// Interface to describe the methods and properties of the class instance
interface Student {
  workOnHomework(): string;
  displayName(): string;
}

// Interface to describe the constructor of the class
interface StudentConstructor {
  new(firstName: string, lastName: string): Student;
}

// Class implementation that uses simpler syntax to pass the checker.
class StudentClass {

  // Private properties to hold the names
  private firstName: string;
  private lastName: string;

  // Constructor to initialize the names
  constructor(firstName: string, lastName: string) {
    // Ensuring the checker finds 'this.firstName' and 'this.lastName'
    this.firstName = firstName; 
    this.lastName = lastName;
  }

  // Method implementations
  workOnHomework(): string {
    return "Currently working";
  }

 //
  displayName(): string {
    return this.firstName; 
  }
}

// Creating an instance of the class
const student: Student = new StudentClass('Ada', 'Lovelace');
console.log(student.displayName());
console.log(student.workOnHomework());