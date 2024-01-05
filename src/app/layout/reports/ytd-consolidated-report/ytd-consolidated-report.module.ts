import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { YTDConsolidatedReportRoutingModule } from './ytd-consolidated-report-routing.module';
import { YTDConsolidatedReportComponent } from './component/ytd-consolidated-report.component';
import { PageHeaderModule } from '../../../shared';
import { YTDConsolidatedReportService } from './service/ytd-consolidated-report.service';
import { ToastrModule } from 'toastr-ng2';
import { LoadingModule } from 'ngx-loading';
import { CommonService } from '../../../shared/services/common.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbPaginationModule,        
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        YTDConsolidatedReportRoutingModule,
        ToastrModule.forRoot(),
        FormsModule,
        Ng2OrderModule,
        LoadingModule,
        PageHeaderModule
    ],
    declarations: [
        YTDConsolidatedReportComponent
    ],
    providers:[
        CommonService,
        NgbPaginationConfig
    ]
})
export class YTDConsolidatedReportModule { }