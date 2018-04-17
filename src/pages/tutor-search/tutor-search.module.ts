import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorSearchPage } from './tutor-search';

@NgModule({
  declarations: [
    TutorSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorSearchPage),
  ],
})
export class TutorSearchPageModule {}
