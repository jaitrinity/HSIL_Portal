import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandWiseReportComponent } from './component/brand-wise-report.component';

const routes: Routes = [
    { path: '', component: BrandWiseReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandWiseReportRoutingModule { }
