const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helpers = require('./helpers')
const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');

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
// serve static files form /public
app.use(express.static(path.resolve(__dirname, 'public'))) // serve static files
// Set your routes here
app.get('/', (req, res, next) => routeHome(req, res, next))
app.get('/about', (req, res, next) => routeAbout(req, res, next))

// Start server.
app.listen(PORT, function () {
    // Let us know the server has started successfully.
    console.log("Server listening on: http://localhost:" + PORT);
});


const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://{dev-411107.okta.com}/oauth2/default',
  clientId: '{0oa1dmdi0jcpltyEi357}',
  assertClaims: {
    aud: 'api://default',
  },
});

/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */
function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];
  const expectedAudience = 'api://default';

  return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

const app = express();

/**
 * For local testing only!  Enables CORS for all domains
 */
app.use(cors());

/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
app.get('/secure', authenticationRequired, (req, res) => {
  res.json(req.jwt);
});

/**
 * Another example route that requires a valid access token for authentication, and
 * print some messages for the user if they are authenticated
 */
app.get('/api/messages', authenticationRequired, (req, res) => {
  res.json([{
    message: 'Hello, word!'
  }]);
});

app.listen(3000, () => {
  console.log('Serve Ready on port 3000');
});