const artistModel = require('../model/artistModel');

const controller = {};

controller.add = (req, res, _next) => {
    const myArtist = new artistModel({
        name: req.body.name,
        nationality: req.body.nationality
    });
    myArtist.save((err, obj) => {
        if (err) {
            console.error('UGHH! Error', err)
        } else {
            res.redirect('/artists/list/?addedId=' + obj._id)
        }
    });
}

//GET controllers (for rendering FRONTEND)
controller.addForm = (_req, res, _next) => {
    res.render('artists/form', {
        mode: 'add',
        data: {},
        title: 'Add record',
    })
}

controller.editForm = (req, res, _next) => {
    //We 're finding by id. All functions of mongo are promises by default
    artistModel.find({ _id: req.params.id })
    .then((obj) => {
        res.render('artists/form', {
            mode: 'edit',
            //find always returns an array (as mysql consults)
            data: obj[0],
            title: 'Edit record: ' + obj[0]._id
        })
    })
        .catch ((err) => {
        res.send('ERROR: ' + err);
    })
}

controller.list = (req, res, _next) => {
    //req.query returns params specified in url starting with ?. Example: ?addedId=X
    const recordWasAdded = ('addedId' in req.query);
    artistModel.find({})
        //We dont need to await another consults, so we dont use async in this case
        .then((objs) => {
            let theMessage = null;
            //Checking if we have a query in URL (add model adds a QUERY to the URL)
            if (recordWasAdded) theMessage = 'Artist added! ID =' + req.query.addedId;
            res.render('artists/list', {
                data: objs,
                message: theMessage
            })
        })
        .catch((err) => {
            res.send('ERROR: ' + err)
        })
}

module.exports = controller;