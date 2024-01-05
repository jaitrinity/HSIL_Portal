import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'accounts', loadChildren: './reports/accounts/account.module#AccountsModule' },
            { path: 'visits', loadChildren: './reports/visits/visits.module#VisitsModule' },
            { path: 'user-report', loadChildren: './reports/user-report/user-report.module#UserReportModule' },            
            { path: 'project-report', loadChildren: './reports/project-report/project-report.module#ProjectReportModule' },
            { path: 'role-master', loadChildren: './role-master/role-master.module#RoleMasterModule'},
            { path: 'brand-wise-report', loadChildren: './reports/brand-wise-report/brand-wise-report.module#BrandWiseReportModule' },
            { path: 'consolidated-report', loadChildren: './reports/consolidated-report/consolidated-report.module#ConsolidatedReportModule' },            
            { path: 'segment-wise-report', loadChildren: './reports/segment-wise-report/segment-wise-report.module#SegmentWiseReportModule' },
            { path: 'user-performance-report', loadChildren: './reports/user-perfromance-report/user-perfromance-report.module#UserPerfromanceReportModule' },
            { path: 'weekly-report', loadChildren: './reports/weekly-bd-report/weekly-bd-report.module#WeeklyBDReportModule' },
            { path: 'ytd-consolidated-report', loadChildren: './reports/ytd-consolidated-report/ytd-consolidated-report.module#YTDConsolidatedReportModule' },
            { path: 'user-details', loadChildren: './user-details/user-details.module#UserDetailsModule' },
            { path: 'review-format-report', loadChildren: './reports/review-format-report/review-format-report.module#ReviewFormatReportModule' },
            { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordModule' },                        
            { path: 'quotation-management', loadChildren: './quotation-management/quotation-management.module#QuotationManagementModule' }                        
        ]
    }
];

@NgModule({    
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }