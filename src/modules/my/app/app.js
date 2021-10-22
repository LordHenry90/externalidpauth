import { LightningElement, track } from 'lwc';
const dot = require('dotenv').config();

export default class App extends LightningElement {
    @track loggedUser = undefined;
    @track state;
    //SALESFORCE_URL = 'https://notaroenrico-dev-ed.my.salesforce.com';
    //CALLBACK_URL = 'https://externalidpauth.herokuapp.com/';

    connectedCallback() {
        console.log(process.env.SALESFORCE_URL);
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
                process.env.SALESFORCE_URL + '/services/oauth2/userinfo?access_token=' + access_token + '&format=json',
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

    logoutURL(){
        console.log('logout');
        fetch(
            process.env.SALESFORCE_URL + '/services/oauth2/revoke?token=' + access_token,
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
            this.loggedUser = undefined;
            this.state = 'login';
        })
        .catch((error) => console.log(error));
    }
}
