/// <reference path="./Java.ts" />
/// <reference path="./Cpp.ts" />
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
/// <reference path="./React.ts" />
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.TeacherInterface = {
  firstName: 'isa',
  lastName: 'Dr',
  experienceTeachingC: 8,
};
cpp.teacher;
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
java.teacher;
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
react.teacher;
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
