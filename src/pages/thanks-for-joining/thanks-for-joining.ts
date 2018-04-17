import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-thanks-for-joining',
  templateUrl: 'thanks-for-joining.html'
})
export class ThanksForJoiningPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {

  }
}
