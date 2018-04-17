import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/switchMap';
import { Component}        from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { UserService }  from '../../providers/providers';
import { User } from '../../models/user';
@Component({
  selector: 'my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfilePage{
  user: User;

  constructor(public navCtrl: NavController, private userService: UserService) { }

  goBack(): void {
    this.navCtrl.pop();
  }
/*
  save(): void {
    this.userService.update(this.user)
      .then(() => this.goBack());
  }
  */
}
