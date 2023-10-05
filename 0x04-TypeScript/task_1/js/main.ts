interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attr: string]: any;
}

// const teacher3: Teacher = {
//   firstName: 'John',
//   fullTimeEmployee: false,
//   lastName: 'Doe',
//   location: 'London',
//   contract: false,
// };

// console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

// const director1: Directors = {
//   firstName: 'John',
//   lastName: 'Doe',
//   location: 'London',
//   fullTimeEmployee: true,
//   numberOfReports: 17,
// };
// console.log(director1);

interface IPrintTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacher: IPrintTeacher = function (firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
};

// console.log(printTeacher('John', 'Doe'));

interface IConstructor {
  new (firstName: string, lastName: string): {
    firsTname: string;
    lastName: string;
  };
}

interface IStudentClass {
  readonly firstName: string;
  readonly lastName: string;
  readonly displayName: () => string;
  readonly workOnHomework: () => string;
}

class StudentClass implements IStudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = (): string => {
    return 'Currently working';
  };

  displayName = (): string => {
    return this.firstName;
  };
}
