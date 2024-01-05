import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolidatedReportComponent } from './component/consolidated-report.component';

const routes: Routes = [
    { path: '', component: ConsolidatedReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsolidatedReportRoutingModule { }
