var https = require("https");
var username = "teoinke";

function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
  console.log(response.statusCode);
  
  var body = "";
  
  response.on('data', function (chunk) {
    body += chunk;
  });
  response.on('end', function () {
    var profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
  });
  
})


request.on("error", function(error) {
  console.error(error.message);
});
