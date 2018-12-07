import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SemiModalPage } from './semi-modal';

@NgModule({
  declarations: [
    SemiModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SemiModalPage),
  ],
})
export class SemiModalPageModule {}
