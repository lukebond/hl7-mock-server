var hl7 = require('node-hl7');
var hl7Server = new hl7.Server();

hl7Server.on('hl7', function(msg){
  console.log('Got an HL7 message', JSON.stringify(msg, null, 2));
});
