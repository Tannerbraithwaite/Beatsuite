import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cancellation-policy',
  templateUrl: 'cancellation-policy.html'
})
export class CancellationPolicyPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {

  }
}
