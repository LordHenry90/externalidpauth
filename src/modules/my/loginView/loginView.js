import { LightningElement, track } from 'lwc';
import { config } from 'config';

export default class LoginView extends LightningElement {
    console.log(config.get('sdfcURL'));
    @track userAgentFlowUrlAuth = process.env.AUTH_PROVIDER_URL;
}
