import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile'

@Component({
  selector: 'page-confirm-booking',
  templateUrl: 'confirm-booking.html'
})
export class ConfirmBookingPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) { }

  cancel(){
    this.navCtrl.pop();
  }

  userProfile(){
    this.navCtrl.push(UserProfilePage)
  }
}
