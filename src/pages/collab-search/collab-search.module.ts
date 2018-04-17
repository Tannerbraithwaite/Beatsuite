import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollabSearchPage } from './collab-search';

@NgModule({
  declarations: [
    CollabSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(CollabSearchPage),
  ],
})
export class CollabSearchPageModule {}
