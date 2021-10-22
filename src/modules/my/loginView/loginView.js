import { LightningElement, track } from 'lwc';

export default class LoginView extends LightningElement {
    @track userAgentFlowUrlAuth = process.env.AUTH_PROVIDER_URL;
}
