import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RigisterPageRoutingModule } from './rigister-routing.module';

import { RigisterPage } from './rigister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RigisterPageRoutingModule
  ],
  declarations: [RigisterPage]
})
export class RigisterPageModule {}
