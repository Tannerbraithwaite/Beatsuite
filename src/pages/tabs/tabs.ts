import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab1Title = "TUTORS";
  tab2Title = "RENTALS";
  tab3Title = "COLLAB";
  selectedTabIndex: number;
  private firstLoaded: boolean = false;

  constructor(public navCtrl: NavController, public translateService: TranslateService, public navParams: NavParams) {
    this.selectedTabIndex = this.navParams.get('selectedTab');
  }



}
