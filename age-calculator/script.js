function isEmpty(value) {
  if (value.length === 0 || value === undefined) {
    return true;
  }
  return false;
}

function isValidDate(d, m, y) {
  if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1970 || y > new Date().getFullYear()) {
    return false;
  }
  return true;
}

function calcAge() {
  let inputDate = document.getElementById("date").value;
  let inputMonth = document.getElementById("month").value;
  let inputYear = document.getElementById("year").value;

  if (isEmpty(inputDate) || isEmpty(inputMonth) || isEmpty(inputYear) || !isValidDate(inputDate, inputMonth, inputYear)) {
    alert("Invalid input");
  } else {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth() + 1; //January is 0!
    var todayYear = today.getFullYear();
    console.log(todayYear);
    console.log(inputYear);
    if (inputDate > todayDate) {
      todayDate += 31;
      todayMonth--;
    }
    if (inputMonth > todayMonth) {
      todayMonth += 12;
      todayYear--;
    }

    let diffDay = todayDate - inputDate;
    let diffMonth = todayMonth - inputMonth;
    let diffYear = todayYear - inputYear;

    if (diffDay === 0 || diffMonth === 0 || diffYear === 0) {
      document.getElementById("age").innerHTML = "Your 0 years old.";
    } else {
      document.getElementById("age").innerHTML = `Your Age is ${diffYear} years ${diffMonth} months ${diffDay} days.`;
    }
  }
}
