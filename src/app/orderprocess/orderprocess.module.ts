import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderprocessPageRoutingModule } from './orderprocess-routing.module';

import { OrderprocessPage } from './orderprocess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderprocessPageRoutingModule
  ],
  declarations: [OrderprocessPage]
})
export class OrderprocessPageModule {}
