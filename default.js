require('dotenv').config()
const authProviderURL = process.env.AUTH_PROVIDER_URL;
const callbackURL = process.env.CALLBACK_URL;
const nodeENV = process.env.NODE_ENV;
const sdfcURL = process.env.SALESFORCE_URL;

console.log(authProviderURL);
console.log(callbackURL);
console.log(nodeENV);
console.log(sdfcURL);