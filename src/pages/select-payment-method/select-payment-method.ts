import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ConfirmBookingPage} from '../confirm-booking/confirm-booking'

@Component({
  selector: 'page-select-payment-method',
  templateUrl: 'select-payment-method.html'
})

export class SelectPaymentMethodPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {

  }
  confirmBooking(){
    this.navCtrl.push(ConfirmBookingPage)
  }
  cancel(){
    this.navCtrl.pop();
  }
}
