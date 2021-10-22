import { LightningElement, track } from 'lwc';

const dotenv = require('./preload');

export default class LoginView extends LightningElement {
    @track userAgentFlowUrlAuth = process.env.AUTH_PROVIDER_URL;
}
