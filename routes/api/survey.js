const db = require("../../models");
var router = require("express").Router();
var bodyParser = require('body-parser');


var bodyUrlParser = bodyParser.urlencoded({ extended: true });

router.post("/", bodyUrlParser, function (req, res) {
    console.log('submitting survey', req.data)
    res.send('submitted!')

    var surveyNote = $("#userLocation").text();

    surveyNote = { userLocation: surveyNote };
    $.post("/api/notes", surveyNote).then(function () {
        // When complete, close the modal
        bootbox.hideAll();
    });

    db.Survey.create(req.body, function (err, response) {
        // If There Are Errors, Handle Them. 
        if (err) {
            console.log(err);
        } else {
            res.json(response);
            console.log(response);
        }
    });
});

module.exports = router;