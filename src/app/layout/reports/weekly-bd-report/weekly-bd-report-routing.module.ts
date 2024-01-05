import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeeklyBDReportComponent } from './component/weekly-bd-report.component';

const routes: Routes = [
    { path: '', component: WeeklyBDReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeeklyBDReportRoutingModule { }
