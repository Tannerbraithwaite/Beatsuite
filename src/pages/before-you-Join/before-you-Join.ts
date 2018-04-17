import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { ThanksForJoiningPage } from '../thanks-for-joining/thanks-for-joining';

@Component({
  selector: 'page-before-you-join',
  templateUrl: 'before-you-join.html'
})
export class BeforeYouJoinPage {


  constructor(public navCtrl: NavController) {

  }

  thanksForJoining(){
    this.navCtrl.push(ThanksForJoiningPage);
  }

}
