// Write an interface named Student that accepts the following elements: 
// firstName(string), lastName(string), age(number), and location(string)

interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const linus: Student = {
    firstName: "Linus",
    lastName: "Torvalds",
    age: 45,
    location: "USA"
}

const ritchie: Student = {
    firstName: "Dennis",
    lastName: "Ritchie",
    age: 60,
    location: "USA"
}

const students: Student[] = [linus, ritchie];

export const renderTable = (students: Array<Student>): void =>  {
  // create table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of students) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(students);