import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';

@Component({
  selector: 'add-contact-page',
  templateUrl: 'add-contact.html'
})
export class AddContactPage {
  addedSoftware=[];


  constructor(public navCtrl: NavController,) {

  }
  back() {
    this.navCtrl.pop();
  }

  addContact() {
    this.navCtrl.push(UserProfilePage);
  }
}
