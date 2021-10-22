import { LightningElement, track } from 'lwc';
import { config } from './default';

export default class LoginView extends LightningElement {
    @track userAgentFlowUrlAuth = config.get('authProviderURL');
}
