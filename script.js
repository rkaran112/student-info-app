// Student Information System
// Base file. Student 3 (JavaScript Developer) will add the
// "Show Details" functionality on feature/javascript.

console.log("Student Information System loaded");

const showDetailsBtn = document.getElementById("show-details");
const studentInfo = document.getElementById("student-info");

showDetailsBtn.addEventListener("click", () => {
  if (studentInfo.style.display === "block") {
    studentInfo.style.display = "none";
    showDetailsBtn.textContent = "Show Details";
  } else {
    studentInfo.style.display = "block";
    showDetailsBtn.textContent = "Hide Details";
  }
});
