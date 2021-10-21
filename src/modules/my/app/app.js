import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track loggedUser = undefined;
    @track state;
    SALESFORCE_URL = 'https://notaroenrico-dev-ed.my.salesforce.com/';

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
            fetch(
                this.SALESFORCE_URL + 'services/oauth2/userinfo',
                {
                    method: 'GET',
					mode: 'cors',
					credentials: 'include',
                    headers: { 
						'Content-Type': 'application/json' ,
						'Authorization' : 'Bearer ' + access_token,
						'Accept' : 'application/json',
						"Access-Control-Allow-Origin": 'https://externalidpauth.herokuapp.com'
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
        /*getLoggedInUser().then((response) => {
            if (response.user_id === undefined) {
                this.loggedUser = undefined;
                this.state = 'login';
            } else {
                this.loggedUser = response;
            }
        });*/
    }

    get isLoginView() {
        return this.state === 'login';
    }
}
