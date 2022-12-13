import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Codigo1Page } from './codigo1.page';

const routes: Routes = [
  {
    path: '',
    component: Codigo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Codigo1PageRoutingModule {}
