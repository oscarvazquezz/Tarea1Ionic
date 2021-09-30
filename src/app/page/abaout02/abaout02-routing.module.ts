import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abaout02Page } from './abaout02.page';

const routes: Routes = [
  {
    path: '',
    component: Abaout02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abaout02PageRoutingModule {}
