import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmBookingPage } from '../confirm-booking/confirm-booking';
@Component({
  selector: 'page-confirm-code',
  templateUrl: 'confirm-code.html'
})
export class ConfirmCodePage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {

  }

  cancel(){
    this.navCtrl.pop();
  }

  confirmBooking(){
    this.navCtrl.push(ConfirmBookingPage)
  }
}
