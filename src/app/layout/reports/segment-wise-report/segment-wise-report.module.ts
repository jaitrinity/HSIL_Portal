import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbPaginationConfig, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SegmentWiseReportRoutingModule } from './segment-wise-report-routing.module';
import { SegmentWiseReportComponent } from './component/segment-wise-report.component';
import { PageHeaderModule } from '../../../shared';
import { SegmentWiseReportService } from './service/segment-wise-report.service';
import { DataTableModule } from "angular2-datatable";
import { ToastrModule } from 'toastr-ng2';
import { LoadingModule } from 'ngx-loading';
import { CommonService } from '../../../shared/services/common.service';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),        
        SegmentWiseReportRoutingModule,
        ToastrModule.forRoot(), // ToastrModule added 
        DataTableModule,
        PageHeaderModule,
        FormsModule,
        LoadingModule,
        NgbPaginationModule,
        Ng2OrderModule
    ],
    declarations: [
        SegmentWiseReportComponent
    ],
    providers: [
            CommonService,
            NgbPaginationConfig
        ]
})
export class SegmentWiseReportModule { }