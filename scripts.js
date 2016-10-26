var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

$(function() {
  $("#leapYear").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#leapYear input").val());
    var result = leapYear(year);
    $("#year").text(year);
    if (!result) {
      $("#not").text("not");
    } else {
      $("#not").text("");
    }
    $("#output").show();
  })
})
