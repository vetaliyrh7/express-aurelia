
import {HttpClient, json} from 'aurelia-http-client';
import _ from 'lodash';

let httpClient = new HttpClient();

export class MainContainer {
  constructor() {
    this.message = 'Hello World!';
    this.showAnswers = false;
    this.requestAnswer = [];
    this.activeImage = 0;
    this.imagesArray = [
      {
        id: 0,
        title: "Test img 0",
        url: "http://www.w3schools.com/css/trolltunga.jpg"
      },
      {
        id: 1,
        title: "Test img 1",
        url: "https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg"
      },
      {
        id: 2,
        title: "Test img 2",
        url: "https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider1.jpg"
      }
    ];
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
