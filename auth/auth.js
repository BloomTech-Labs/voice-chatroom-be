const okta = require("@okta/okta-sdk-nodejs");
const OktaJwtVerifier = require("@okta/jwt-verifier");
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`, // required
});
const client = new okta.Client({
  orgUrl: process.env.OKTA_ORG_URL,
  token: process.env.OKTA_API_TOKEN, // Obtained from Developer Dashboard
});
module.exports = {
  client,
  oktaJwtVerifier,
};
