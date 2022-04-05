// display and time every second
var time = null,
date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#time')
    update();
    setInterval(update, 1000);
});

// display current day
$(document).ready(function () {
    var currentDayEl =moment().format("MMMM Do YYYY");
    $("#currentDay").text("Today's Date: " + currentDayEl);


// make the save button work
    $(".saveBtn").on("click", function () {
      var userInput = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

// save user input to local storage
      localStorage.setItem(time, userInput);
    });

// finds and displays any saved tasks
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
  
// what time is it now?
    function hourTracker() {
      var currentHour = moment().hour();

//
      $(".time-block").each(function () {
        var now = parseInt($(this).attr("id"));
        if (now < currentHour) {
          $(this).addClass("past");
        } else if (now === currentHour) {
          $(this).addClass("present");
          $(this).removeClass("past");
        } else {
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
        }
      });
    }

    hourTracker();
  });