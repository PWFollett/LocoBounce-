// Dependencies.
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

// Required Routes.
const routeHome = require('./src/routes/users');
const routeAbout = require('./routes/about');

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
app.use(express.static(path.resolve(__dirname, 'public')));

// Set Your Routes Here.
app.get('/', (req, res, next) => routeHome(req, res, next))
app.get('/about', (req, res, next) => routeAbout(req, res, next))

// Connect to the MongoDB Database.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/citieslist");

// Start server.
app.listen(PORT, function () {
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});