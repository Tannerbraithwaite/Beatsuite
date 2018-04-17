import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { EditSoftwarePage } from '../edit-software/edit-software';

@IonicPage()
@Component({
  selector: 'page-add-production-software-modal',
  templateUrl: 'add-production-software-modal.html',
})
export class AddProductionSoftwarePage {


  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  addSoftware() {
  }

  saveSoftware() {
    this.navCtrl.push(EditSoftwarePage);
  }
}
