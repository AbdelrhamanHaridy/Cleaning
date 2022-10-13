import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartappPage } from './startapp.page';

const routes: Routes = [
  {
    path: '',
    component: StartappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartappPageRoutingModule {}
