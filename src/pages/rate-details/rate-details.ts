import { Component, ViewChild } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-rate-details',
  templateUrl: 'rate-details.html'
})
export class RateDetailsPage {

  rateArray: String[];


  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.rateArray = ['Teaching', 'Mentor/Coaching', 'Equipment Rental', 'Studio Rental']
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
