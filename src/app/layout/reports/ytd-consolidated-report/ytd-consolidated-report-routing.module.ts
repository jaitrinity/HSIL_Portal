import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YTDConsolidatedReportComponent } from './component/ytd-consolidated-report.component';

const routes: Routes = [
    { path: '', component: YTDConsolidatedReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YTDConsolidatedReportRoutingModule { }
