
const mongoose=require('mongoose')
mongoose.connect('mongodb://node:123456@localhost:27017/node');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('ok')
});