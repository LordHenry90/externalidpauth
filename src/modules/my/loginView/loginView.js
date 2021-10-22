import { LightningElement, track } from 'lwc';
import { configDotEnv } from 'scripts/server'

export default class LoginView extends LightningElement {

    @track userAgentFlowUrlAuth = process.env.AUTH_PROVIDER_URL;
}
