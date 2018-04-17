import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemCreatePage } from '../item-create/item-create';

import { Items } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  editPage() {
    this.navCtrl.push(ItemCreatePage);
  }
}
