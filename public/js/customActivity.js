define(["postmonger"], function (Postmonger) {
  "use strict";
  // console.log(postmonger);
  console.log(Postmonger);

  var connection = new Postmonger.Session();
  /*var pg = require(‘pg’);//postgresql
  var connectionString = "postgres://postgres:postgres@gcp-mimetic-planet/34.77.138.158:5432/customactivity-db";
  var pgClient = new pg.Client(connectionString);*/

  connection.trigger("ready");

  connection.on("initActivity", function (data) {
    /*pgClient.connect();
    var query = pgClient.query("SELECT * FROM public.perfis_clientes");
    query.on("row", function(row,result){
        result.addRow(row);
        console.log(row);
    });*/
    //evento disparado quando se carrega no botão "Done" no Journey Builder
    console.log("Activity was initiated.");
  });

  connection.on("clickedNext", function (data) {
    //evento disparado quando se carrega no botão "Done" no Journey Builder
    console.log("Next was clicked.");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    console.log(fname + " " + lname);

    var payload = { firstName: fname, lastName: lname };
    var jsonPayloadString = JSON.stringify(payload);

    connection.trigger("updateActivity", jsonPayloadString);
  });
});
