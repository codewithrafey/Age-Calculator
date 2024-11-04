function sub() {
  var selectedDate = document.getElementById("dateSelect").value;
  var selectedMonth = document.getElementById("monthSelect").value;
  var selectedYear = document.getElementById("yearSelect").value;
  if (
    selectedDate === "Choose..." ||
    selectedMonth === "Choose..." ||
    selectedYear === "Choose..."
  ) {
    document.getElementById("res").innerHTML = "Result";
    document.getElementById("output").style.color = "red";
    document.getElementById("output").innerHTML =
      "Invalid date. Please select all fields.";
    return;
  }

  var dob = new Date(selectedYear, selectedMonth, selectedDate);
  var today = new Date();

  var ageYears = today.getFullYear() - dob.getFullYear();
  var ageMonths = today.getMonth() - dob.getMonth();
  var ageDays = today.getDate() - dob.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
  document.getElementById("res").innerHTML = "Result";
  document.getElementById("output").style.color = "black";
  document.getElementById(
    "output"
  ).innerHTML = `Your are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
