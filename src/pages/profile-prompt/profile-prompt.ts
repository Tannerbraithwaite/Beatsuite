import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/providers';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ItemCreatePage } from '../item-create/item-create'
import { User } from '../../models/user';

@Component({
  selector: 'profile-prompt',
  templateUrl: 'profile-prompt.html'
})
export class ProfilePromptPage {
  user: User;




  constructor(public navCtrl: NavController,
    public userService: UserService,
    public navParams: NavParams) {

  };
}
