import {HttpClient, json} from 'aurelia-http-client';
import _ from 'lodash';

let httpClient = new HttpClient();

export class App {
  constructor() {
    this.message = 'Hello World!';
    this.showAnswers = false;
    this.requestAnswer = [];
    this.sendRequest();
  }

  sendRequest() {
    httpClient.get('/api/users')
      .then(response => {
        this.requestAnswer = JSON.parse(response.response);
        this.showAnswers = true;
      })
   };
}
