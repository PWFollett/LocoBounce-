const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helpers = require('./helpers')
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
// require routes
const routeHome = require('./routes/home')
const routeAbout = require('./routes/about')
const app = express()
// use express-handlebars view engine and set views template directory
const hbs = exphbs.create({
    partialsDir: __dirname + '/views/partials',
    helpers: helpers()
})
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serve static files form /public
app.use(express.static(path.resolve(__dirname, 'public'))) // serve static files
// Set your routes here
app.get('/', (req, res, next) => routeHome(req, res, next))
app.get('/about', (req, res, next) => routeAbout(req, res, next))
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/citieslist");

// Start server.
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });