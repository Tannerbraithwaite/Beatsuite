import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchFiltersPage } from '../search-filters/search-filters';


@Component({
  selector: 'page-collab-search',
  templateUrl: 'collab-search.html',
})
export class CollabSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollabSearchPage');
  }

  searchFilters() {
    this.navCtrl.push(SearchFiltersPage)
  }

}
