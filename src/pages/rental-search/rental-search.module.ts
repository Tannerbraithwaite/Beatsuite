import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentalSearchPage } from './rental-search';

@NgModule({
  declarations: [
    RentalSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(RentalSearchPage),
  ],
})
export class RentalSearchPageModule {}
