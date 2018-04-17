import { Component, OnInit } from '@angular/core';
import { NavController} from 'ionic-angular';

import { UserService } from '../../providers/providers';
import { User } from '../../models/user';

@Component({
  selector: 'page-rental-search',
  templateUrl: 'rental-search.html',
})
export class RentalSearchPage{
  currentUsers: User[] = [];

  constructor(public navCtrl: NavController, private userService: UserService) {
  }

/**
  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(currentUsers => this.currentUsers = currentUsers.slice(1, 5));
  }
  **/

}
