// Dependencies.
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const apiRoutes = require('./routes')
const PORT = process.env.PORT || 3000;

const db = require("./models");

const citySeedsDB = require("./citySeedsDB");

// create application/json parser
//var jsonParser = bodyParser.json()
 var bodyUrlParser =  bodyParser.urlencoded({ extended: true });


// Required Routes.
//const routeHome = require('./src/routes/users');
//const routeAbout = require('./routes/about');

// Create An Instance of An Express App.
const app = express();

//app.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
//app.use( bodyParser.urlencoded({ extended: true }))

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
app.use(express.static(path.resolve(__dirname, 'client/build')));


app.use('/', apiRoutes);
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

// Survey Database.
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/surveyDB";
mongoose.connect(MONGODB_URI);

// Store the mongoose connection string.
var connectionDB = mongoose.connection;

// If There Is An Error, Handle It.
connectionDB.on("error", console.error.bind(console, "connection error:"));

// Otherwise, open the successful connection.
connectionDB.once("open", function () {
  console.log("Connected to Mongoose!");
});

app.post("/survey", bodyUrlParser, function (req, res) {
  console.log('submitting survey', req.data && req.data.userLocation)
  res.send('submitted!')
  return;


  db.Survey.create({ userLocation: "Database Entry." }, function (err, response) {
    // If There Are Errors, Handle Them. 
    if (err) {
      console.log(err);
    } else {
      res.json(response);
      console.log(response);
    }
  });
});


// app.get("/api/cities", function (req, res) {
//   console.log('submitting cities data', req.data)
//   db.City.insertMany({ name: citySeedsDB }, function (err, response) {
//     // If There Are Errors, Handle Them.
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(response);
//       console.log(response);
//     }
//   });
// });


// app.post('/survey', function (req, res) {
//   new user({
//     _id: req.body.userLocation,
//   }).save(function (err, doc) {
//     if (err) res.json(err);
//     else res.send('Successfully inserted!');
//   });
// });

// Start server.
app.listen(PORT, function () {
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});