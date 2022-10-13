import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartappPageRoutingModule } from './startapp-routing.module';

import { StartappPage } from './startapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartappPageRoutingModule
  ],
  declarations: [StartappPage]
})
export class StartappPageModule {}
