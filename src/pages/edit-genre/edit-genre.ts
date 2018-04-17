import { Component, ViewChild } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

import { UserProfilePage } from '../user-profile/user-profile'

@Component({
  selector: 'page-edit-genre',
  templateUrl: 'edit-genre.html'
})
export class EditGenrePage{
  selectedGenres: String[];
  genreArray: String[];


  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    this.selectedGenres = []
    this.genreArray = ['Funk', 'Bass', 'DNB', 'DeepHouse', 'Future Bass', 'House', 'Dubstep']
  }

  cancel() {
    this.navCtrl.pop();
  }

  userProfile(){
    this.navCtrl.push(UserProfilePage)
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
   togglegenre(genre) {
     let index = this.selectedGenres.indexOf(genre);

     if (index > -1) {
       this.selectedGenres.splice(index, 1);
     } else {
       this.selectedGenres.push(genre);
     }
     console.log(this.selectedGenres);
   }
}
