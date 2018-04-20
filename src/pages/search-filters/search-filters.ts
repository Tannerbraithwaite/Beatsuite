import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';

import { Genre } from '../../models/genre';

import { UserProfilePage } from '../user-profile/user-profile';

@Component({
  selector: 'page-search-filters',
  templateUrl: 'search-filters.html'
})
export class SearchFiltersPage {
  genreArray: Genre[];
  selectedGenres: Genre[];
  equipmentArray: String[];
  selectedEquipment: String[];

  constructor(public navCtrl: NavController, private appCtrl: App, private navParams: NavParams) {
    this.genreArray = [{name:'#Funk', isActive:false}, {name:'#Bass', isActive:false},
                        {name:'#DNB', isActive:false}, {name:'#DeepHouse', isActive:false},
                        {name:'#Future Bass', isActive:false}, {name:'#House', isActive:false},
                        {name:'#Dubstep', isActive:false}]
    this.selectedGenres = []
    this.selectedEquipment = []
    this.equipmentArray = ['#CDJs', '#Ableton', '#Traktor', '#Serato', '#Push']

  }

  cancel(){
    this.navCtrl.pop();
  }

  userProfile(){
    this.navCtrl.push(UserProfilePage);
  }

  togglegenre(genre) {
    let index = this.selectedGenres.indexOf(genre);

    if (index > -1) {
      this.selectedGenres.splice(index, 1);
    } else {
      this.selectedGenres.push(genre);
    }
    console.log();
  }

  toggleequipment(equipment) {
    let index = this.selectedEquipment.indexOf(equipment);

    if (index > -1) {
      this.selectedEquipment.splice(index, 1);
    } else {
      this.selectedEquipment.push(equipment);
    }
    console.log();
  }
}
