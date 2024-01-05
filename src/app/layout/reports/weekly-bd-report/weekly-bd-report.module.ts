import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { WeeklyBDReportRoutingModule } from './weekly-bd-report-routing.module';
import { WeeklyBDReportComponent } from './component/weekly-bd-report.component';
import { PageHeaderModule } from '../../../shared';
import { WeeklyBDReportService } from './service/weekly-bd-report.service';
import { ToastrModule } from 'toastr-ng2';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        WeeklyBDReportRoutingModule,
        ToastrModule.forRoot(), // ToastrModule added         
        NgbPaginationModule,
        LoadingModule,
        Ng2OrderModule,        
        FormsModule,
        PageHeaderModule
    ],
    declarations: [
        WeeklyBDReportComponent
    ],
    providers:[AuthenticationService,NgbPaginationConfig]
})
export class WeeklyBDReportModule { }