const songModel = require('../model/songModel');
const artistModel = require('../model/artistModel');
const albumModel = require('../model/albumModel');

const controller = {};
controller.del = (req, res, _next) => {
    const song = songModel.find({ _id: 3 })
}
controller.add = (req, res, _next) => {
    const mySong = new songModel({
        name: req.body.name,
        artist: req.body.artist,
        album: req.body.album,
        duration: req.body.duration,
        format: req.body.format
    });
    mySong.save((err,obj) => {
        if (err) {
            console.error('UGHH! Error',err)
        } else {
            res.redirect('/songs/list/?addedId=' + obj._id)
        }
    });
}
//GET controllers (for rendering FRONTEND)
controller.addForm = async (_req, res, _next) => {
    const artists = await artistModel.find({});
    const albums = await albumModel.find({});

    res.render('songs/form', {
        mode:'add',
        data: {},
        title: 'Add record',
        allArtists: artists,
        allAlbums: albums
    })
}

controller.editForm = (req, res, _next) => {
    //We 're finding by id. All functions of mongo are promises by default
    songModel.find({ _id: req.params.id })
        //Async converts an asynchronous function as sync. Then, we use await
        //With populate, we can obtain properties of the other collections
        .populate('artist')
        .populate('album')
        //obj is the result of the promise (success case)
        .then(async (obj) => {
            //We cannot user await without async
            //We list artists & albums first, and when they're listed, we can continue
            const artists = await artistModel.find({});
            const albums = await albumModel.find({});

            //await is over, then we render
            res.render('songs/form', {
                mode:'edit',
                //find always returns an array (as mysql consults)
                data: obj[0],
                allArtists: artists,
                allAlbums: albums,
                title: 'Edit record: ' + obj[0]._id
            });
        })
        .catch((err) => {
            res.send('ERROR: ' + err);
        })
}

controller.list = (req, res, _next) => {
    //req.query returns params specified in url starting with ?. Example: ?addedId=X
    const recordWasAdded = ('addedId' in req.query);
    songModel.find({})
        .populate('artist')
        .populate('album')
        //We dont need to await another consults, so we dont use async in this case
        .then((objs) => {
            let theMessage = null;
            //Checking if we have a query in URL (add model adds a QUERY to the URL)
            if (recordWasAdded) theMessage = 'Song added! ID =' + req.query.addedId;
            res.render('songs/list', {
                data: objs,
                message: theMessage
            })
        })
        .catch((err) => {
            res.send('ERROR: ' + err)
        })
}


module.exports = controller;