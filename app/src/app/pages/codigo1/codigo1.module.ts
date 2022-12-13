import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Codigo1PageRoutingModule } from './codigo1-routing.module';

import { Codigo1Page } from './codigo1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Codigo1PageRoutingModule
  ],
  declarations: [Codigo1Page]
})
export class Codigo1PageModule {}
