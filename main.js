//import AgoraRTC from 'agora-rtc-sdk'

var fs = require('fs');

var result = JSON.parse( fs.readFileSync("./key/key.json") );

console.log(result);