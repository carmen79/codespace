const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    releaseYear: Number,
    coverFilename: String,
}, { collection: 'albums' }
);

module.exports = mongoose.model('albumModel', albumSchema);