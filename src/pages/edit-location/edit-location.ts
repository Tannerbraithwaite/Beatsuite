import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

import { UserProfilePage } from '../user-profile/user-profile'

@Component({
  selector: 'page-edit-Location',
  templateUrl: 'edit-location.html'
})
export class EditLocationPage {
  city: string;
  provincestate: string;
  country: string;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.city = '';
    this.provincestate = '';
    this.country = ''}


  cancel() {
    this.navCtrl.pop();
  }

  userProfile() {
    this.navCtrl.push(UserProfilePage);
  }
}
