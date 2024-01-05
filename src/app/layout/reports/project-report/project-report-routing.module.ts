import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectReportComponent } from './component/project-report.component';

const routes: Routes = [
    { path: '', component: ProjectReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectReportRoutingModule { }