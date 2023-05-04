
$(function () {

  var today = day();
  var saveBtn = $(".saveBtn");



  function userInputs() {
  saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });
  }
    

  function timeTracker() {
    //get current number of hours.
    var timeNow = dayjs().hour();
    console.log(timeNow);

    // loop over time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockTime);


      // check if we've moved past this time
      if (blockTime < timeNow) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  
  //  Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  function displayText() {
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  }

  // code to display the current date in the header of the page.
  function day() {
    document.getElementById("currentDay").innerHTML = dayjs().format('dddd, MMMM D, YYYY');
  
  }

 
  displayText();
  timeTracker();
  userInputs();
  

});