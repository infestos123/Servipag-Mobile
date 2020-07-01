import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutopistasPage } from './autopistas.page';

const routes: Routes = [
  {
    path: '',
    component: AutopistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutopistasPageRoutingModule {}
