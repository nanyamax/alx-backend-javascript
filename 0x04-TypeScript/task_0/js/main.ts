interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
let student1: Student = {
  firstName: 'Olatunde',
  lastName: 'Azeez',
  age: 8,
  location: 'LA',
};
let student2: Student = {
  firstName: 'Amaechi',
  lastName: 'Madu',
  age: 70,
  location: 'string',
};

const studentList = [student1, student2];
const table = document.createElement('table');

studentList.map((student) => {
  const row = table.appendChild(document.createElement('tr'));
  const columnFirstName = row.appendChild(document.createElement('td'));
  const columnLocation = row.appendChild(document.createElement('td'));

  columnFirstName.textContent = student.firstName;
  columnLocation.textContent = student.location;
});
table.setAttribute('border', '1px');
document.body.appendChild(table);
