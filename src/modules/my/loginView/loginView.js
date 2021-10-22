import { LightningElement, track } from 'lwc';
const configDotEnv = require('dotenv').config();

export default class LoginView extends LightningElement {

    @track userAgentFlowUrlAuth = process.env.AUTH_PROVIDER_URL;
}
