var express = require("express");
var app = express();

app.get("/", function(request, response) {
    response.send("Hi there!");
});

app.get("/bye", function(request, response) {
   response.send("GOODBYE"); 
});

app.get("/dog", function(request, response) {
    response.send("sup");
});





app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER STARTED");
});

