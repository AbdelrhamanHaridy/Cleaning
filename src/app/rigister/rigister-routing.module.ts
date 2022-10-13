import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RigisterPage } from './rigister.page';

const routes: Routes = [
  {
    path: '',
    component: RigisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RigisterPageRoutingModule {}
