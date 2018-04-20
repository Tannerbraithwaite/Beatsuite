import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePromptPage } from '../profile-prompt/profile-prompt';

@Component({
  selector: 'page-thanks-for-joining',
  templateUrl: 'thanks-for-joining.html'
})
export class ThanksForJoiningPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {

  }
  profilePrompt(){
    this.navCtrl.push(ProfilePromptPage)
  }

  resend(){
    console.log("We sent your information again");
  }
}
