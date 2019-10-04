// Dependencies.
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const db = require("./models");

// Required Routes.
//const routeHome = require('./src/routes/users');
//const routeAbout = require('./routes/about');

// Create An Instance of An Express App.
const app = express();

// Use the Handlebars View Engine Templater.
const hbs = exphbs.create({
  partialsDir: __dirname + '/views/partials',
});

// Using the Handlebars Engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// Define Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve Static Files From '/public'.
app.use(express.static(path.resolve(__dirname, 'client/public')));

// Set Your Routes Here.
//app.get('/', (req, res, next) => routeHome(req, res, next))
//app.get('/about', (req, res, next) => routeAbout(req, res, next))


// router.post('/survey', (req, res) => {
//   const { id, update } = req.body;
//   db.find(id, update, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

app.post("/survey", function (req, res) {
  console.log('submitting survey', req.data)

  
  db.Survey.find({}, function (err, response) {
    // If There Are Errors, Handle Them.
    if (err) {
      console.log(err);
    } else {
      res.json(response);
    }
  });
});






// Start server.
app.listen(PORT, function () {
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});