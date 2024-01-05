import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotationManagementComponent } from './quotation-management.component';

const routes: Routes = [
    { path: '', component: QuotationManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationManagementRoutingModule { }
