import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';

@IonicPage()
@Component({
  selector: 'page-add-hourly-rate-modal',
  templateUrl: 'add-hourly-rate-modal.html',
})
export class AddHourlyRatePage {


  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addHourlyRate() {
    this.navCtrl.push(UserProfilePage);
  }
/**
  save() {
    this.viewCtrl.dismiss(this.event);
  }
**/
}
