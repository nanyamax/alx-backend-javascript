interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// console.log(createEmployee(200));

// console.log(createEmployee(1000));

// console.log(createEmployee('$500'));

const isDirector = (employee: Teacher | Director): boolean => {
  return typeof employee === typeof Director;
};

const executeWork = (employee: Teacher | Director) => {
  console.log('Testee employee : ', typeof employee);
  if (isDirector(employee)) {
    const init = new Director();
    return init.workDirectorTasks;
  }

  if (typeof employee === typeof Teacher) {
    const init = new Teacher();
    return init.workTeacherTasks;
  }
};

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return `Teaching Math`;
  } else if (todayClass === 'History') {
    return `Teaching History`;
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
