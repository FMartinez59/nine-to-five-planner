//displays current day
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);

$(document).ready(function (){
  //save button click listener
  $(".saveBtn").on("click", function () {
    //gets value from description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //stores users input in local storage 
    localStorage.setItem(time, text);
  })

  //this is to change the color of the columns based on whether they are in the past,present, or future
function columColorChanger() {
  //current time in hours
  var currentTime = moment().hour();
//loops over all my time blocks
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

    if (timeBlock < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (timeBlock === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}
columColorChanger();
})