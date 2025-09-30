//Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

//Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the interfaces with specific methods.
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}


class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}


//type that can be either Director or Teacher.
type Employee = Director | Teacher;


function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number') {
    if (salary < 500) { 
      return new Teacher();
    }
  }
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


//String literal type
type Subjects = 'Math' | 'History';

// function that uses the type
function teachClass(todayClass:Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

console.log("Testing teachClass with 'Math':");
console.log(teachClass('Math')); 

console.log("\nTesting teachClass with 'History':");
console.log(teachClass('History')); 
