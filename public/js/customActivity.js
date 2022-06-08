define(["postmonger"], function (Postmonger) {
  "use strict";
  // console.log(postmonger);
  console.log(Postmonger);

  var connection = new Postmonger.Session();

  connection.trigger("ready");

  connection.on("initActivity", function (data) {
    //evento disparado quando se carrega no botão "Done" no Journey Builder
    console.log("Activity was initiated.");
  });

  connection.on("clickedNext", function (data) {
    //evento disparado quando se carrega no botão "Done" no Journey Builder
    console.log("Next was clicked.");
    var firstName = document.getElementById("fname").value();
    var lastName = document.getElementById("lname").value();
    console.log(firstName + " " + lastName);
  });
});
