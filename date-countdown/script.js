function getFormattedDate(date) {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return month + "/" + day + "/" + year;
}

function interval(date1, date2) {
  if (date1 > date2) {
    // swap
    var result = interval(date2, date1);
    result.years = -result.years;
    result.months = -result.months;
    result.days = -result.days;
    result.hours = -result.hours;
    return result;
  }
  result = {
    years: date2.getYear() - date1.getYear(),
    months: date2.getMonth() - date1.getMonth(),
    days: date2.getDate() - date1.getDate(),
    hours: date2.getHours() - date1.getHours(),
    mintues: date2.getMinutes() - date1.getMinutes(),
    seconds: date2.getSeconds() - date1.getSeconds(),
  };
  if (result.hours < 0) {
    result.days--;
    result.hours += 24;
  }
  if (result.days < 0) {
    result.months--;
    // days = days left in date1's month,
    //   plus days that have passed in date2's month
    var copy1 = new Date(date1.getTime());
    copy1.setDate(32);
    result.days = 32 - date1.getDate() - copy1.getDate() + date2.getDate();
  }
  if (result.months < 0) {
    result.years--;
    result.months += 12;
  }

  days.innerHTML = result.days;
  hours.innerHTML = result.hours;
  minutes.innerHTML = result.mintues;
  seconds.innerHTML = result.seconds;
}

const date1 = new Date("10/22/2023 01:15:00");
const date2 = new Date("12/30/2023 00:00:00");

var days = document.querySelector(".countdown-days");
var hours = document.querySelector(".countdown-hours");
var minutes = document.querySelector(".countdown-minutes");
var seconds = document.querySelector(".countdown-seconds");

setInterval(interval(date1, date2), 1000);
