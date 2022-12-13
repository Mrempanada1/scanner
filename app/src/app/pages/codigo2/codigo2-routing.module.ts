import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Codigo2Page } from './codigo2.page';

const routes: Routes = [
  {
    path: '',
    component: Codigo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Codigo2PageRoutingModule {}
