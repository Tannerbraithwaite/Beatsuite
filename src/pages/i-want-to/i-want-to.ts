import { Component, ViewChild } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-i-want-to',
  templateUrl: 'i-want-to.html'
})
export class IWantToPage {
  selectedWants: String[];
  wantArray: String[];


  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.selectedWants = []
    this.wantArray = ['Learn', 'Collaborate', 'Teach', 'Mentor', 'Rent Equipment','Rent Studio Space']
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
   togglewant(wants) {
     let index = this.selectedWants.indexOf(wants);

     if (index > -1) {
       this.selectedWants.splice(index, 1);
     } else {
       this.selectedWants.push(wants);
     }
     console.log(this.selectedWants);
   }
}
