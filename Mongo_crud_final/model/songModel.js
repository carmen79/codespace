const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    // _id: Schema.Types.ObjectId, // Not necessary
    artist: { type: Schema.Types.ObjectId, ref: 'artistModel' },
    album: { type: Schema.Types.ObjectId, ref: 'albumModel' },
    name: String,
    format: String,
    duration: Number
}, { collection: 'songs' }
);

module.exports = mongoose.model('songModel', songSchema);