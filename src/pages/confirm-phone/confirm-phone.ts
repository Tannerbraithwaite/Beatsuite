import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmCodePage } from '../confirm-code/confirm-code';

@Component({
  selector: 'page-confirm-phone',
  templateUrl: 'confirm-phone.html'
})
export class ConfirmPhonePage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {

  }

  cancel(){
    this.navCtrl.pop();
  }

  userProfile(){
    this.navCtrl.push(ConfirmCodePage)
  }
}
