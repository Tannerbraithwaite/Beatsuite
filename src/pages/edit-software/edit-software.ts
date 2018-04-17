import { Component, ViewChild } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

import {UserProfilePage} from '../user-profile/user-profile';
import {AddMixerPage} from '../add-mixer-modal/add-mixer-modal';
import {AddProductionSoftwarePage} from '../add-production-software-modal/add-production-software-modal';

@Component({
  selector: 'page-edit-software',
  templateUrl: 'edit-software.html'
})
export class EditSoftwarePage{
  selectedSoftware: String[];
  softwareArray: String[];


  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.softwareArray = ['Mixing Software', 'Production Software']
  }

  cancel() {
    this.navCtrl.pop();
  }

  addProductionSoftware() {
    this.navCtrl.push(AddProductionSoftwarePage);
  }

  addMixingSoftware() {
    this.navCtrl.push(AddMixerPage);
  }

  userProfile(){
    this.navCtrl.push(UserProfilePage);
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
}
