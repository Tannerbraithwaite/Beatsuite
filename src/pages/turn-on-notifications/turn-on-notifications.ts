import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { ProfilePromptPage } from '../profile-prompt/profile-prompt';


import { UserService } from '../../providers/providers';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-turn-on-notifications',
  templateUrl: 'turn-on-notifications.html'
})
export class TurnOnNotificationsPage {

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public userService: UserService,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
    }

    profilePrompt(){
      this.navCtrl.push(ProfilePromptPage);
    }
  }



  // Attempt to login in through our User service
