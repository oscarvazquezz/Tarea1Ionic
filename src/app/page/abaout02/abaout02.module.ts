import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Abaout02PageRoutingModule } from './abaout02-routing.module';

import { Abaout02Page } from './abaout02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Abaout02PageRoutingModule
  ],
  declarations: [Abaout02Page]
})
export class Abaout02PageModule {}
