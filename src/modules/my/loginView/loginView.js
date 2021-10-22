import { LightningElement, track } from 'lwc';

const Dotenv = require('dotenv-webpack');

export default class LoginView extends LightningElement {
    @track userAgentFlowUrlAuth = process.env.AUTH_PROVIDER_URL;
}
