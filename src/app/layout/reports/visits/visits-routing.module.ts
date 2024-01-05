import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitsComponent } from './component/visits.component';

const routes: Routes = [
    { path: '', component: VisitsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
