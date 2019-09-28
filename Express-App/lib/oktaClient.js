const okta = require('@okta/okta-sdk-nodejs');
const client = new okta.Client({
    orgUrl: 'https://dev-411107.okta.com',
    token: '00fiYvnOygioOBaXUwemZKc9XpM6G3IY1YquJWP0kW'
});
module.exports = client;