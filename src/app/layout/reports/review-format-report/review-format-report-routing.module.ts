import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewFormatReportComponent } from './components/review-format-report.component';

const routes: Routes = [
    { path: '', component: ReviewFormatReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewFormatReportRoutingModule { }