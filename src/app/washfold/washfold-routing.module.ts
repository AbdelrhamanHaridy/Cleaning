import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashfoldPage } from './washfold.page';

const routes: Routes = [
  {
    path: '',
    component: WashfoldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashfoldPageRoutingModule {}
