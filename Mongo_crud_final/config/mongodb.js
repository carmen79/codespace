const mongoose = require('mongoose');

const mongoConn = mongoose.connect('mongodb://usuariocrud:passcrud@localhost/crud',{ useNewUrlParser: true })
    .then((_ok) => console.log('You re now connected to Mongo!'))
    .catch((err) => console.error('Somewhing went wrong', err))


//we need to give permission to user.
//Console mongo
//*add environment variable if you dont have it
//route: C:\Program Files\MongoDB\Server\4.0\bin
/*db.createUser(
    ... {
    ... user:'usuariocrud',
    ... pwd:'passcrud',
    ... roles:['readWrite', 'dbAdmin' ]
    ... }
    ... );
*/

module.exports = mongoConn;