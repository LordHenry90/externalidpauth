import { LightningElement, track } from 'lwc';

export default class LoginView extends LightningElement {
    SALESFORCE_URL = 'https://webresults-a1-dev-ed.my.salesforce.com';

    @track userAgentFlowUrlAuth =
        this.SALESFORCE_URL + '/services/auth/oauth/Custom_Auth_Provider';
}
