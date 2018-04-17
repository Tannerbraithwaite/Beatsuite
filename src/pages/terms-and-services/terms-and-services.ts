import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, ViewController , ModalController  } from 'ionic-angular';
import { ItemCreatePage } from '../item-create/item-create';

@Component({
  selector: 'page-terms-and-services',
  templateUrl: 'terms-and-services.html',
  providers: []
})

export class TermsAndServicesPage {
  hasAgreed = false;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
    public modalCtrl: ModalController, formBuilder: FormBuilder) {}
    testfun(){
      console.log("Your button worked Motha Fucka");
    }
}

  /**
   * The user is done and wants to create the genre, so return it
   * back to the presenter.

  done() {
  }

  itemCreatePage() {
    this.navCtrl.push(ItemCreatePage);
  }
*/
