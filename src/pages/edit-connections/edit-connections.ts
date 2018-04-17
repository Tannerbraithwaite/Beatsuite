import { Component, ViewChild } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

import { UserProfilePage } from '../user-profile/user-profile'

@Component({
  selector: 'page-edit-connections',
  templateUrl: 'edit-connections.html'
})
export class EditConnectionsPage{
  selectedConnections: String[];
  connectionsArray: String[];


  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.selectedConnections = []
    this.connectionsArray = ['Facebook', 'Soundcloud', 'Mixcloud', 'Twitter', 'Youtube']
  }

  cancel() {
    this.navCtrl.pop();
  }

  userProfile(){
    this.navCtrl.push(UserProfilePage)
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
   toggleconnections(connection) {
     let index = this.selectedConnections.indexOf(connection);

     if (index > -1) {
       this.selectedConnections.splice(index, 1);
     } else {
       this.selectedConnections.push(connection);
     }
     console.log(this.selectedConnections);
   }
}
