import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-send-message-request',
  templateUrl: 'send-message-request.html'
})
export class SendMessageRequestPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {

  }
}
