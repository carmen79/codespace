const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    nationality: String
}, { collection: 'artists' }

);

module.exports = mongoose.model('artistModel', artistSchema);