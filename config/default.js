require('dotenv').config();

export const config = {
    authProviderURL: process.env.AUTH_PROVIDER_URL,
    callbackURL: process.env.CALLBACK_URL,
    nodeENV: process.env.NODE_ENV,
    sdfcURL: process.env.SALESFORCE_URL
}