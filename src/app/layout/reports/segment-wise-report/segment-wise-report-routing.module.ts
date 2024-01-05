import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SegmentWiseReportComponent } from './component/segment-wise-report.component';

const routes: Routes = [
    { path: '', component: SegmentWiseReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentWiseReportRoutingModule { }
