// var fs = require('fs');

// var appKey = JSON.parse( fs.readFileSync("./key/key.json") );

var client = AgoraRTC.createClient({mode: 'live', codec: "h264"});

client.init( appKey , function () {
  console.log("AgoraRTC client initialized");

}, function (err) {
  console.log("AgoraRTC client init failed", err);
});

appKey = null;

client.join(null, "1000", 999, function(uid) {
  console.log("User " + uid + " jion channel Successfully!");
}, function(err) {
  console.log("Join channel failed.", err);
});


var localStream = AgoraRTC.createStream({
  streaID: 999,
  audio: true,
  video: true,
  screen: false
});

AgoraRTC.getDevices (function(devices){
  var decC = devices.length;

  var id = devices[0].devicesId;
});

localStream.init(function() {
  console.log("getUserMedia successfully!");
  localStream.play('agora_local');
}, function (err) {
  console.log("getUserMeida failed: ", err);
});

client.publish(localStream, function(err) {
  console.log("Publish local stream error: " + err);
});

client.on('stream-published', function (evt) {
  console.log("Publish local mstream successfully!");
}); 