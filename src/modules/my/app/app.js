import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track loggedUser = undefined;
	@track logoutURL = '';
    @track state;
    SALESFORCE_URL = 'https://notaroenrico-dev-ed.my.salesforce.com/';
    CALLBACK_URL = 'https://externalidpauth.herokuapp.com/';

    connectedCallback() {
        var urlParams = new URL(document.location.toString().replace('#', '?'))
            .searchParams;
        var access_token = urlParams.get('access_token');
        console.log(urlParams);
        console.log(access_token);
        if (access_token === null) {
            console.log('no fetch');
            this.loggedUser = undefined;
            this.state = 'login';
        } else {
            console.log('fetch');
			this.logoutURL = this.SALESFORCE_URL + 'services/oauth2/revoke?token=' + access_token + '&callback=' + this.CALLBACK_URL;
            fetch(
                this.SALESFORCE_URL + 'services/oauth2/userinfo?access_token=' + access_token + '&format=json',
                {
                    method: 'GET',
					mode: 'cors',
                    headers: { 
						'Content-Type': 'application/json' ,
						'Accept' : 'application/json'						
					}
                }
            )
                .then((response) => {
						return response.json(); // returning the response in the form of JSON
		})
                .then((jsonResponse) => {
                    console.log('jsonResponse ===> '+JSON.stringify(jsonResponse));
                    this.loggedUser = jsonResponse;
                })
                .catch((error) => console.log(error));
        }
    }

    get isLoginView() {
        return this.state === 'login';
    }
}
