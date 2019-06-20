const albumModel = require('../model/albumModel');

//We need to require path & multer dependencies
const path = require('path');
//Get multipart & asigns different keys. Parse files from forms to object
const multer = require('multer')({
    //Specifying final destination for uploads
    dest: 'public/uploads'
});
const fs = require('fs');
const util = require('util');

const controller = {};

//fileUploader using path, util & fs
controller.storeWithOriginalName = (file) => {
    //Establishing unique ID (using new date) + filename
    var idDate = new Date();
    var prefixFilename = idDate.getTime() + '_' + idDate.getMilliseconds();
    let filename = prefixFilename + '_' + file.originalname;

    //Establishing path destination+filename
    const fullnewPath = path.join(file.destination, filename);
    //util is a package with utilities, in this case, we use it for promisify
    const rename = util.promisify(fs.rename);
    //promisify converts async blocker into a sync
    //file.path is a temporary route 
    return rename(file.path, fullnewPath)
        .then(() => {
            //We return the filename when all actions are done
            return filename;
        })
        .catch((err) => {
            console.error('err');
        })
}


controller.add = (req, res, _next) => {
    const myAlbum = new albumModel({
        name: req.body.name,
        releaseYear: req.body.releaseYear
    });
    myAlbum.save((err, obj) => {
        if (err) {
            console.error('UGHH! Error', err)
        } else {
            res.redirect('/albums/list/?addedId=' + obj._id)
        }
    });
}

//for rendering FRONTEND)
controller.addForm = (_req, res, _next) => {
    res.render('albums/form', {
        mode: 'add',
        data: {},
        title: 'Add record',
        coverEmpty: true
    })
}

controller.editForm = (req, res, _next) => {
    //We 're finding by id. All functions of mongo are promises by default
    albumModel.find({ _id: req.params.id })
        .then((obj) => {
            res.render('albums/form', {
                mode: 'edit',
                //find always returns an array (as mysql consults)
                data: obj[0],
                coverEmpty: false,
                title: 'Edit record: ' + obj[0]._id
            })
        })
        .catch((err) => {
            res.send('ERROR: ' + err);
        })
}

//functional methods 

//We need to use async, because file need to be uploaded before the consult
controller.edit = async (req, res, next) => {
    //establishing default types of file (we need to restrict to user)
    const fileTypes = ['image/png', 'image/jpeg']
    //We're receiveng an object directly, so we dont need to use new albumModel
    let newObj = {
        name: req.body.name,
        releaseYear: req.body.releaseYear
    };
    if (req.file) {
        if (fileTypes.includes(req.file.mimetype) && req.file.size < 6291456) {
            //Using function to store the file. Using await for await the file upload
            const storeFileOperation = await controller.storeWithOriginalName(req.file)
                //For encode a string as URL component
                .then(encodeURIComponent)
                .then(encoded => {
                    newObj.coverFilename = encoded;
                })
                .catch(next);
        }
    }
    albumModel.updateOne({ _id: req.params.id }, newObj, (err, raw) => {
        if (err) {
            console.error('DAMMMMN! There was an error', err);
        } else {
            console.log('Guardado y redirigir: ', raw);
            res.redirect('/albums/list/?editedId=' + req.params.id);
        }
    });
}

controller.del = (req, res, next) => {
    albumModel.findOne({ _id: req.params.id })
        .then((obj) => {
            //We save filename from database, and then we delete it if exists
            const fileName = obj.coverFilename;
            const wasFileDeleted = fs.unlinkSync(`/uploads/${fileName}`);

            if (wasFileDeleted) {
                albumModel.deleteOne({ _id: req.params.id }, (err, result) => {
                    if (err) {
                        console.error('DAMMMMN! There was an error', err);
                    } else {
                        console.log('Guardado y redirigir: ', result);
                        res.redirect('/albums/list/?deletedId=' + req.params.id);
                    }
                })
            }
        })
        .catch((err2) => {
            console.error('Cannot get database info', err2);
        })
}

controller.list = (req, res, _next) => {
    //req.query returns params specified in url starting with ?. Example: ?addedId=X
    const recordWasAdded = ('addedId' in req.query);
    albumModel.find({})
        //We dont need to await another consults, so we dont use async in this case
        .then((objs) => {
            let theMessage = null;
            //Checking if we have a query in URL (add model adds a QUERY to the URL)
            if (recordWasAdded) theMessage = 'Artist added! ID =' + req.query.addedId;
            res.render('albums/list', {
                data: objs,
                message: theMessage
            })
        })
        .catch((err) => {
            res.send('ERROR: ' + err)
        })
}

module.exports = controller;