$(document).ready(function () {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  // $("#target4").remove();
  // $("#target2").appendTo("#right-well");
  // $("#target5").clone().appendTo("#left-well");
  $("#target1").parent().css("background-color", "red");
  $("#right-well").children().css("color", "orange");
  $("#left-well").children().css("color", "green");
  $(".target:nth-child(2)").addClass("animate__animated animate__bounce");
  $(".target:odd").addClass("animate__animated animate__lightSpeedInRight");
  $(".target:even").addClass("animate__animated animate__swing");
  $("body").addClass("animate__animated animate__hinge");
});

// Make the second child in each of your well elements bounce. You must select the elements' children with the target class.
