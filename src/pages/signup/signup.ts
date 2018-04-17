import { Component } from '@angular/core';
import { NavController, ToastController, Events } from 'ionic-angular';
import { MainPage } from '../../pages/pages';
import { UserService } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from '../login/login';
import { ItemCreatePage } from '../item-create/item-create';
import { ProfilePromptPage } from '../profile-prompt/profile-prompt';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: '',
    email: '',
    password: ''
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public userService: UserService,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public events:Events) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }
  login() {
    this.navCtrl.push(LoginPage);
  }

  doSignup() {
  /*  this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
   }, (err) => {

     // TODO: Remove this when you add your signup endpoint

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });*/
    this.navCtrl.push(ProfilePromptPage, this.account)
  }

  launch
}
