var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(function() {
  $("#leapYear").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#leapYear input").val());
    console.log(leapYear(year));
  })
})
