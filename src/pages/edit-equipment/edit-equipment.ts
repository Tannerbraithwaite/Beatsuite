import { Component, ViewChild } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

import { UserProfilePage } from '../user-profile/user-profile'

@Component({
  selector: 'page-edit-equipment',
  templateUrl: 'edit-equipment.html'
})
export class EditEquipmentPage{
  selectedEquipment: String[];
  equipmentArray: String[];


  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.selectedEquipment = []
    this.equipmentArray = ['CDJS', 'Mixer', 'Moniter', 'TurnTables', 'Sound System']
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  userProfile(){
    this.navCtrl.push(UserProfilePage)
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
   toggleequipment(equipment) {
     let index = this.selectedEquipment.indexOf(equipment);

     if (index > -1) {
       this.selectedEquipment.splice(index, 1);
     } else {
       this.selectedEquipment.push(equipment);
     }
     console.log(this.selectedEquipment);
   }
}
