const studentForm = document.getElementById("student-form");
const studentTable = document.getElementById("student-table");

// Function to create a new row in the table
function addStudentToTable(student) {
  const row = studentTable.insertRow();
  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.dob}</td>
    <td>${student.gender}</td>
    <td>${student.phone}</td>
    <td>${student.grade}</td>
  `;
}

// Add an event listener to the form
studentForm.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the form
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const phone = document.getElementById("phone").value;
  const grade = document.getElementById("grade").value;

  // Create a new student object
  const student = {
    name: name,
    dob: dob,
    gender: gender,
    phone: phone,
    grade: grade
  };

  // Add the student to the table
  addStudentToTable(student);

  // Reset the form
  studentForm.reset();
});