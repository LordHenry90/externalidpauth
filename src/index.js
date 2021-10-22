import { createElement } from 'lwc';
import MyApp from 'my/app';
import '@lwc/synthetic-shadow';

console.log(process.env);
const indexApp = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(indexApp);
