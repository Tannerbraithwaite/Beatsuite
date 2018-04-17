import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { UserService } from '../../providers/providers';

import { User } from '../../models/user';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
  providers: [UserService],
})
export class ListMasterPage /**implements OnInit*/ {
  currentUsers: User[] = [];

  constructor(public navCtrl: NavController, private userService: UserService) {
  }
/**
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(currentUsers => this.currentUsers = currentUsers.slice(1, 5));
  }
**/

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
   /*
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }
  */

  /**
   * Delete an item from the list of items.
   */
   /*
  deleteItem(item) {
    this.items.delete(item);
  }
  */

  /**
   * Navigate to the detail page for this item.
   */
  openUser(user: User) {
    this.navCtrl.push(ItemDetailPage, {
      user: user
    });
  }
}
