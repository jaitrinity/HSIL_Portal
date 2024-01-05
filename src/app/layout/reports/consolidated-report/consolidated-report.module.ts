import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ConsolidatedReportRoutingModule } from './consolidated-report-routing.module';
import { ConsolidatedReportComponent } from './component/consolidated-report.component';
import { PageHeaderModule } from '../../../shared';
import { ConsolidatedReportService } from './service/consolidated-report.service';
import { ToastrModule } from 'toastr-ng2';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        ConsolidatedReportRoutingModule,
        ToastrModule.forRoot(), // ToastrModule added                 
        LoadingModule,
        NgbPaginationModule,
        Ng2OrderModule,        
        FormsModule,
        PageHeaderModule
    ],
    declarations: [
        ConsolidatedReportComponent        
    ],
    providers :[NgbPaginationConfig]
})
export class ConsolidatedReportModule { }