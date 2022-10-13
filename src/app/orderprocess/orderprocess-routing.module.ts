import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderprocessPage } from './orderprocess.page';

const routes: Routes = [
  {
    path: '',
    component: OrderprocessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderprocessPageRoutingModule {}
