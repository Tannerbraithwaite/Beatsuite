import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-select-payment-method',
  templateUrl: 'select-payment-method.html'
})

export class SelectPaymentMethodPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {

  }
}
