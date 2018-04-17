import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProfileCreatePage } from './profile-create';

@NgModule({
  declarations: [
    ProfileCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
  
  ]
})
export class ItemCreatePageModule { }
