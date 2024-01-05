import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPerfromanceReportComponent } from './component/user-perfromance-report.component';

const routes: Routes = [
    { path: '', component: UserPerfromanceReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPerfromanceReportRoutingModule { }
