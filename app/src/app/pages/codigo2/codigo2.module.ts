import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Codigo2PageRoutingModule } from './codigo2-routing.module';

import { Codigo2Page } from './codigo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Codigo2PageRoutingModule
  ],
  declarations: [Codigo2Page]
})
export class Codigo2PageModule {}
